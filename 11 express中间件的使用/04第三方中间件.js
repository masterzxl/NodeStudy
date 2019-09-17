/**
 * body-parser 中间件 第三方的 获取post提交的数据
 * 1、 npm install body-parser --save
 * 2、 var bodyParser = require("body-parser")
 * 3、 设置中间件
 *     // parse application/x-www-form-urlencoded   
 *     app.use(bodyParser.urlencoded({extended:false}))
 *     // parse application/json
 *     app.use(bodyParser.json())
 * 
 * 4、req.body获取post数据
 */

// cookie session 获取post提交的数据

var express = require("express");
var app = new express();
var bodyParser = require("body-parser");

// 配置body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.set("view engine","ejs");

app.get("/",function(req,res){
    res.send('你好express!');
});

app.get("/login",function (req,res) { 

    res.render("login");
 })

app.post("/doLogin",function (req, res) { 
    console.log(req.body.username);
    console.log(req.body.password);
    res.send("YES");
 })

 app.listen(8080);