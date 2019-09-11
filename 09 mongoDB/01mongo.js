// mongoDB 需要npm引入项目中
/**
 * 1、 npm install mongodb --save 
 * 2、 var MongoClient = require('mongodb).MongoClient; // 获取连接
 * 3、 var url = 'mongodb://localhost:27017/test';   连接数据库地址
 * 4、 连接数据库
 *  MongoClient.connect(url,function(err,db){
 * 
 * });
 */

var url = require("url");
var http = require('http');
var ejs = require('ejs');
var app = require('./model/express_router.js');

var MongoClient = require("mongodb").MongoClient;
var dburl = 'mongodb://localhost:27017/';  // 27017 端口号  test 为数据库的名称
http.createServer(app).listen(8080);

app.get('/register',function(req,res){

    // console.log('login');
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    res.end('register!');
})

// 登录
app.get('/login',function(req,res){

    ejs.renderFile('./views/login.html',{},function (err,data) {

        res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
        res.end(data);
      })
})

// 执行登录
app.post('/dologin',function(req,res){

    console.log(res.body);
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    res.end("<script>alert('登录成功！'); history.back();</script>");

})

// 首页路由
app.get('/',function(req,res){

    ejs.renderFile('./views/index.html',{},function(err,data){
        res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});

        res.end(data);    
    })
})
app.get('/zxl',function(req,res){

    ejs.renderFile('./views/index.html',{},function(err,data){
        res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});

        res.end(data);    
    })
})
// 通过nodejs向mongo数据库添加数据
app.get("/add",function(req,res){

    // 首先建立连接
    MongoClient.connect(dburl,{useNewUrlParser:true},function(err,db){

        if(err){
            console.log("mongoDB数据库连接失败!");
            console.log(err);
            return;
        }
        // 选择使用的数据库
        var dbo = db.db('test');
        // 连接成功 添加数据
        dbo.collection('user').insertOne({
            "username":"赵雪利12",
            "age":45
            },function(error,result){
                if(error){
                    console.log("插入数据失败！");
                    console.log(error);
                    return;
                }   
                // 插入数据成功
                console.log("插入数据成功！");
                res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
                res.end("插入数据成功！");

                // 关闭数据库
                db.close();
            }
        )

    });
})


// 通过nodejs向mongo数据库修改数据
app.get("/update",function(req,res){
    MongoClient.connect(dburl,{useNewUrlParser:true},function(err,db){
        if(err){
            console.log("数据库连接错误！");
            return;
        }
        var dbo = db.db('test');

        dbo.collection("user").updateOne(
            {"username":"zhangsan"},{$set:{"age":20}}
        ,function(error,result){

            if(error){
                console.log("修改数据成功！");
                return;
            }
            console.log("修改成功！")
            console.log(result);

            res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
            res.end("修改成功！");
            db.close();
        })
        
    })
})


// 通过nodejs向mongo数据库删除数据
app.get("/delete",function(req,res){

    // 获取url里面的get参数
    var query = url.parse(req.url,true).query;
    var username = query.username;

    MongoClient.connect(dburl,{useNewUrlParser:true},function(err,db) {
        
        if(err){
            console.log("数据库连接不成功!");
            return ;
        }
        var dbo = db.db("test");

        dbo.collection('user').deleteOne({
            "username":username

        },function(error,result) {

            if(error){
                console.log("删除不成功！");
                return ;
            }
            console.log(result);
            res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
            res.end("删除成功!");
            // 千万记得关闭数据库
            db.close();
        })
    })
})