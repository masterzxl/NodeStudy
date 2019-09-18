/**
 * 1、 安装 npm install cookie-parser --save
 * 2、 require 引入
 * 3、 设置中间件 app.use(cookieParser());
 * 4、 设置cookie
 *     res.cookie("name","zhangsan",(maxAge:900000,httpOnly:true)); httpOnly 默认false不允许客户脚本访问
 * 5、 获取cookie req.cookies.name
 */

/**cookie保存在浏览器本地，如果没有过期的话关闭浏览器，再打开浏览器cookie也是存在的*/
var express = require("express");
var app = new express();

var cookieParser = require("cookie-parser");

// 设置中间件
app.use(cookieParser());

app.get("/",function (req,res) {  
    res.send("首页");
 })

// 设置cookie的路由
app.get("/set",function (req,res) { 

    // 参数一：参数的名字   参数二：参数的值   参数三：cookie的配置信息  domain表示多个二级域名共享cookie信息 
    res.cookie("username","赵雪利",{maxAge:60000,path:"/news",httpOnly:true}); // path ：在指定的路由下可以访问cookie
    res.cookie("password","123",{maxAge:60000,path:"/news"});
    res.send("设置cookie");
 })

//检测是否获取到cookie
app.get("/new",function (req,res) { 
    console.log(req.cookies);
    res.send(req.cookies);
 })

app.get("/news",function (req,res) { 
    console.log(req.cookies);
    res.send(req.cookies);
 })
app.listen(8080);