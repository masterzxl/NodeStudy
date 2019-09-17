var express = require("express");
var app = new express();

/**应用级中间件
 * next() 路由继续向下匹配
 */

// 表示匹配任何路由
app.use(function (req,res,next) { 
    console.log(new Date());
    next();
 })

// 权限判断 没有登陆，跳转到登陆页面  登陆了显示首页

app.get("/",function(req,res){
    res.send('你好express!');
});

app.get("/news",function (req,res) { 
    res.send("新闻路由！");
 });

 app.listen(8080);