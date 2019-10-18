var express = require("express");
var router = express.Router();
var login = require("./admin/login.js");
var product = require("./admin/product.js");
var user = require("./admin/user.js");

// 要在所有的路由前面判断是否进行了登陆操作  权限判断
router.use(function(req,res,next){
    if(req.url == "/login" || req.url == "/login/doLogin"){
        next();
    }
   
    else{
        if(req.session.userinfo && req.session.userinfo.username!=''){
            // req.app.locals["userinfo"] = req.session.userinfo;
            next(); // 向下匹配路由
        }
        else{
            // 没有登陆，跳转到登陆页面
            res.redirect("/admin/login");
        }
    }
})

router.use("/login",login);
router.use("/product",product);
router.use("/user",user);

module.exports = router;