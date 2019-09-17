var express = require("express");
var app = new express();

// 表示托管静态页面
// 首先会在public里面有没有这个文件  如果没有的话，会继续向下匹配
app.use(express.static("public"));
app.use("/static",express.static("public"));
/**内置中间件
 * next() 路由继续向下匹配
 */

app.get("/",function(req,res){
    res.send('你好express!');
});

 app.listen(8080);