var express = require("express");
var router = express.Router();

router.get("/",function(req,res){
    res.send("admin -user");
})

router.get("/add",function(req,res){
    res.send("admin -user add");
})

router.get("/edit",function(req,res){
    res.send("admin -user edit");
})

router.get("/delete",function(req,res){
    res.send("admin -user delete");
})

module.exports = router;