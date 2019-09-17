var express = require("express");
var app = new express();

/**路由中间件
 * next() 路由继续向下匹配
 */

app.get("/",function(req,res){
    res.send('你好express!');
});

/**
// 在匹配相应的路由之前可以进行操作
app.get("/news",function (req,res,next) { 
    console.log("news");
    next();
 });
 */

/** 也可以通过应用级中间件进行匹配指定的路由 */
app.use("/news",function (req,res,next) { 
    console.log("这是应用级中间件！");
    next();
 })

app.get("/news",function (req,res) { 

    res.send("这是路由中间件news！");
 });

// 匹配所有路由
app.use(function (req,res) { 
    res.status(404).send("这是404表示路由没有匹配到！");
 })

 app.listen(8080);