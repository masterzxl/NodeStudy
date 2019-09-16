/**
 * 1、安装完成ejs，不需要引用ejs,在express中可以直接使用ejs
 * 
 * 2、配置express的模板引擎  app.set("view engine","ejs");
 * 
 * 3、在express中使用ejs   
 * res.render("news",{"new":["123"，"234","345"]})
 *  参数1、渲染的模板引擎
 *  参数2、数据
 */
var ejs = require("ejs");
var express = require("express");
var app = new express();

// 修改文件的后缀名称
app.engine("html",ejs.__express);

// 配置ejs模板引擎
app.set("view engine",'html');

// 中间件
// 匹配静态路由 对于外部的css/js/json文件   public目录下面的文件提供静态web服务
app.use(express.static('public'));

// 配置虚拟static目录的静态服务器
// http://localhost:8080/static/css/style.css
// css/style.css 去public这个目录下面找这个文件，如果有就返回
app.use("/static",express.static("public"));

// //设置模板路径
// app.set("views" , __dirname + "/statics");

app.get("/",function (req,res) {
  
    res.render("index");
})

app.get("/news",function (req,res) {
    var list = ["111","222","333343533"];
    // 渲染模板  + 传参数
    res.render("new",{"list":list});
})

app.listen(8080,'127.0.0.1');