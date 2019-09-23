/**
 *  销毁session
 * req.session.destroy(function(err){
 * })
 * 
 * req.session.username="张三" //设置session
 * 
 * req.session.username // 获取session
 * 
 * req.session.cookie.maxAge=0; //重新设置cookie的过期时间
 */

var express = require("express");
var app = new express();

var session = require("express-session");
// 配置中间件   浏览器关闭之后就session就消失了
app.set('trust proxy', 1);
app.use(session({
  secret: 'keyboard cat', // 可以随便写，一个String类型的字符串，作为服务器生成session的签名（加密用的）
  resave: false, // 强制保存session即使它没有变化，默认为true ， 建议设置成false
  saveUninitialized: true, // 强制将未初始化的session存储，
  cookie: { // 之前跟cookie-parser 中可以设置的cookie的属性在这个里面都可以设置
    maxAge:1000 * 60 * 30// 30分钟后过期
     },
  rolling:true

   
}))

app.get("/",function (req,res) { 
    // 获取session中的属性
    if(req.session.userinfo){
        res.send("你好" + req.session.userinfo + ",欢迎回来！");
    }else{
        res.send("未登录！");
    }
})

 app.get("/login",function (req,res) {
     // 设置session
     req.session.userinfo = "lisi";
     res.send("登陆成功！");
  })

// 退出登陆
app.get("/loginOut",function (req,res) { 

  // req.session.cookie.maxAge = 0; // 设置cookie的过期时间为0,这样可以直接退出登陆
  req.session.destroy();
  res.send("退出登陆!");
 })

  app.listen(8080);