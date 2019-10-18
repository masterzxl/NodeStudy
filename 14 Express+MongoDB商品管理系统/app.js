var express = require("express");
var session = require('express-session');
var app = new express();


// 设置session的中间件
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { 
      maxAge: 1000*60*30
   },
   rolling:true
}));
// 默认找views这个文件夹下找render传入的参数
app.set("view engine","ejs");
// 添加一个静态web服务 加载静态文件
app.use(express.static("public"));
// 配置一个虚拟路由
app.use("/upload",express.static("upload"));

var admin = require("./routers/admin.js");
var index = require("./routers/index.js");
app.use("/admin",admin);
app.use("/",index);
// 设置监听端口
app.listen(8080,"127.0.0.1");