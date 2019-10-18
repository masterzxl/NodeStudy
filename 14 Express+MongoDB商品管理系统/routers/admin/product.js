var express = require("express");
var router = express.Router();
var fs = require("fs");
var md5 = require("md5-node");
var DB = require("../../modules/db.js");
var multiparty = require("multiparty");

router.get("/",function(req,res){
    DB.find("product",{},function(err,data){

        res.render("admin/product/index",{
            "list":data
        });
    })
})

router.get("/add",function(req,res){
    res.render("admin/product/add");
})

router.post("/doAdd",function(req,res){
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
                res.redirect("/admin/product");
            }
        })
    })
})


router.get("/edit",function(req,res){
     var id = req.query.id;
    // 去数据库查询数据,渲染到页面
    DB.find("product",{
        "_id": new DB.ObjectID(id) // 获取数据库自增长的ID 需要经过ObjectID()
    },function(err,data){
        res.render("admin/product/edit",{
            list:data[0]
        })
    })
})

router.post("/doEdit",function(req,res){
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
                res.redirect("/admin/product");
            }
        })
    })
})

router.get("/delete",function(req,res){
    var id = req.query.id;
    console.log(id);
    DB.delete("product",{
        "_id":DB.ObjectID(id)
    },function(err,data){
       if(!err){
           res.redirect("/admin/product");
       } 
       else{
           res.send("<script>alert('删除失败!');location.href='admin/product'</script>");
       }
    })
})

module.exports = router;