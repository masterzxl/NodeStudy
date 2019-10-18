var express = require("express");
var router = express.Router();

// var login = require("./admin/login.js");
// router.get("/login",login);

// var product = require("./admin/product.js");
// router.get("/product",product);

// var user = require("./admin/user.js");
// router.get("/user",user);

router.get("/",function(req,res){
    res.send("index");
})

router.get("/product",function(req,res){
    res.send("index product");
})


module.exports = router;