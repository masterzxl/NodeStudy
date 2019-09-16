/**
 * 1、cd到项目里面
 * 2、npm init --yes / npm init 创建 package.json文件
 * 3、安装express npm install express --save    cnpm install express --save
 * 4、引入express使用 var express = require("express")
 *                   var app = new express()
 *                   app.get('',function(req,res){
 *                   })
 */


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