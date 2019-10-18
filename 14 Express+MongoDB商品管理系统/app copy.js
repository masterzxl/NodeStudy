var express = require("express");
var fs = require("fs");
var md5 = require("md5-node");
var session = require('express-session');
var DB = require("./modules/db.js");
// 实例化一个对象
var app = new express();

var multiparty = require("multiparty");


// 设置中间件
// 默认找views这个文件夹下找render传入的参数
app.set("view engine","ejs");

// 设置session的中间件
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { 
      maxAge: 1000*60*30
   },
   rolling:true
}));

// 添加一个静态web服务 加载静态文件
app.use(express.static("public"));

// 配置一个虚拟路由
app.use("/upload",express.static("upload"));

// 要在所有的路由前面判断是否进行了登陆操作
// app.use(function(req,res,next){

//     if(req.url == "/login" || req.url == "/doLogin"){
//         next();
//     }else{
//         if(req.session.userinfo && req.session.userinfo.username!=''){
//             next(); // 向下匹配路由
//         }
//         else{
//             // 没有登陆，跳转到登陆页面
//             res.redirect("/login");
//         }
//     }
// })

// 设置路由
// 登陆页面
app.get("/login",function(req,res){
    res.render("login");
})

// 获取登陆提交的数据
app.post("/doLogin",function(req,res){
    
    // 1、获取数据
    // console.log(req.body);

    // 2、连接数据库，查询数据

    var username = req.body.username;
    var password = md5(req.body.password);
    DB.find("user",{
            "username":username,
            "password":password
        },function(err,data){
            if(data.length > 0){
                // 保存用户信息  一般用session来保存信息
                req.session.userinfo = data[0];

                // ejs 设置全局变量 在后台的任意地方都可以访问
                app.locals["userinfo"] = req.session.userinfo.username;

                // 登录成功，跳转到商品页面
                res.redirect("/product"); 
            }
            else{
                // 登录失败，将页面重新跳转到登陆页面
                res.send("<script>alert('登陆失败！');location.href='/login'</script>");
            }
        })
})

// 商品列表
app.get("/product",function(req,res){

    DB.find("product",{},function(err,data){

        res.render("product",{
            "list":data
        });
    })

})

// 显示添加商品的页面
app.get("/productadd",function(req,res){
    res.render("productadd");
})
// 获取表单提交的数据，以及post过来的图片
app.post("/doProductAdd",function(req,res){

    var form = new multiparty.Form();
    form.uploadDir = "upload";   //上传图片保存的图片  目录必须存在
    form.parse(req, function(err,fields,files){
        // console.log(files); // 图片上传成功返回的信息
        // console.log(fields); // 获取表单提交的数据

        var title = fields.title[0];
        var price = fields.price[0];
        var fee = fields.fee[0];
        var description = fields.description[0];

        var pic = files.pic[0].path;
        
        // 保存进数据库
        DB.insert("product",{
            title:title,
            price:price,
            fee:fee,
            description:description,
            pic:pic
        },function(err,data){
            if(!err){
                res.redirect("/product");
            }
        })
    })

})
// 编辑商品
app.get("/productedit",function(req,res){

    var id = req.query.id;
    // 去数据库查询数据,渲染到页面
    DB.find("product",{
        "_id": new DB.ObjectID(id) // 获取数据库自增长的ID 需要经过ObjectID()
    },function(err,data){

        res.render("productedit",{
            list:data[0]
        })
    })
})

// 修改商品
app.post("/doProductEdit",function(req,res){
    var form = new multiparty.Form();
    form.uploadDir = "upload";   //上传图片保存的图片  目录必须存在
    form.parse(req, function(err,fields,files){
        // console.log(files); // 图片上传成功返回的信息
        // console.log(fields); // 获取表单提交的数据
        var id = fields._id[0]; // 修改的条件
        var title = fields.title[0];
        var price = fields.price[0];
        var fee = fields.fee[0];
        var description = fields.description[0];
        var pic = files.pic[0].path;

        
        // 要判断是否对图片进行了修改 originFilename为空表示没有上传图片,不为空表示修改了图片  
        var originalFilename = files.pic[0].originalFilename;
        console.log(files);
        if(originalFilename){
            // 表示修改了图片
            var setData ={
            title:title,
            price:price,
            fee:fee,
            description:description,
            pic:pic

        }
        }else{
            // 将原来的地址赋值给pic
            var setData ={
                title:title,
                price:price,
                fee:fee,
                description:description
            }
            // 删除生成的临时文件
            fs.unlink(pic,function(){});
        }
        var pic ;
        // 保存进数据库
        DB.update("product",{
           "_id":new DB.ObjectID(id)
        },setData,function(err,data){
            if(!err){
                res.redirect("/product");
            }
        })
    })
})

// 删除商品 
app.get("/productdelete",function(req,res){

    var id = req.query.id;
    console.log(id);
    DB.delete("product",{
        "_id":DB.ObjectID(id)
    },function(err,data){
       if(!err){
           res.redirect("/product");
       } 
       else{
           res.send("<script>alert('删除失败!');location.href='/product'</script>");
       }
    })
})

// 退出
app.get("/loginOUT",function(req,res){
    req.session.destroy(function(err){
        if(err){
            console.log(err);
        }else{
            res.redirect("/login");
        }
    })
})
// 设置监听端口
app.listen(8080,"127.0.0.1");