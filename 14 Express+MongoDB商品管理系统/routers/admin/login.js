var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();
var md5 = require("md5-node");
var DB = require("../../modules/db.js");
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

router.get("/",function(req,res){

    res.render("admin/login.ejs");

})

router.post("/doLogin",function(req,res){
    console.log("111111111111111111111111");
    var username = req.body.username;
    var password = md5(req.body.password);
    DB.find("user",{
            "username":username,
            "password":password
        },function(err,data){
            if(data.length > 0){

                // 保存用户信息  一般用session来保存信息
                req.session.userinfo = data[0];
                
                console.log(req.session.userinfo);
                // req.app.locals["userinfo"] = req.session.userinfo;
                // 登录成功，跳转到商品页面
                res.redirect("/admin/product"); 
            }
            else{
                // 登录失败，将页面重新跳转到登陆页面
                res.send("<script>alert('登陆失败！');location.href='/admin/login'</script>");
            }
        })
})

router.get("/loginOut",function(req,res){
    req.session.destroy(function(err){
        if(err){
            console.log(err);
        }else{
            res.redirect("/admin/login");
        }
    })
})

module.exports = router;