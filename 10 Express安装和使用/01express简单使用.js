

var express = require("express"); // 引入
var app = new express(); // 实例化

// 配置路由
app.get("/",function (req,res) {
    res.send("你好NodeJS!");
});

app.get("/news",function (req,res) {
    res.send("你好NodeJS___news!");
});

app.listen(8080);