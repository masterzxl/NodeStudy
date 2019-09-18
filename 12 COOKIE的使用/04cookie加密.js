/**
 * 1、 安装 npm install cookie-parser --save
 * 2、 require 引入
 * 3、 设置中间件 app.use(cookieParser());
 * 4、 设置cookie
 *     res.cookie("name","zhangsan",(maxAge:900000,httpOnly:true)); httpOnly 默认false不允许客户脚本访问
 * 5、 获取cookie req.cookies.name
 * 
 * maxAge过期时间  domain共享二级域名 path指定路由下访问信息  httpOnly仅在服务端进行使用，前端js没办法使用
 
 cookie加密 让用户看不到cookie的明文信息

 第一种 保存的时候加密
app.use(cookieParser("sign")); 设置加密字符串
res.cookie("username","zhaoxueli",{maxAge:60000,signed:true});  设置
res.signedCookies 获取未加密前的信息

 第二种 cookie-parser里面 signed属性设置成true
 
 */

/**cookie保存在浏览器本地，如果没有过期的话关闭浏览器，再打开浏览器cookie也是存在的*/
var express = require("express");
var app = new express();

var cookieParser = require("cookie-parser");

// 设置中间件
app.use(cookieParser("sign"));

app.get("/",function (req,res) {  
    console.log(req.signedCookies);
    res.send("首页");
 })

// 设置cookie的路由
app.get("/set",function (req,res) { 

    res.cookie("username","zhaoxueli",{maxAge:60000,signed:true});

    res.send("设置cookie成功！");
 })

app.get("/new",function (req,res) { 
    console.log(req.signedCookies);
    res.send(req.signedCookies);
 })

app.listen(8080);