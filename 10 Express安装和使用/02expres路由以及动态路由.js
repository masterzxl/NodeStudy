

var express = require("express"); // 引入
var app = new express(); // 实例化

// 配置路由
app.get("/",function (req,res) {
    res.send("你好NodeJS!");
});

// 配置动态路由   /newscontent/123 就相当于  aid = 123
app.get("/newscontent/:aid",function (req,res) {

    // 获取动态路由的传值
    var aid = req.params.aid;

    res.send("news_content模块！"); 
});

// get传值  localhost:8080/product?aid=123&cid=456
app.get("/product",function (req,res) { 

    var aid = req.query.aid;
    var cid = req.query.cid;
    res.send("product");
});

app.listen(8080);