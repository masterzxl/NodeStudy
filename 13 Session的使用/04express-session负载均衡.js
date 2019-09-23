
var express = require("express");


var app = new express();

var session = require("express-session");

var MongoStore = require("connect-mongo")(session);
// 配置中间件   浏览器关闭之后就session就消失了
app.set('trust proxy', 1);
app.use(session({
  secret: 'keyboard dog', 
  resave: false, 
  saveUninitialized: true, 
  cookie: { 
    maxAge:1000 * 60 * 30
     },
  rolling:true,
  store:new MongoStore({
    url:'mongodb://localhost:27017/test',
    touchAfter: 24* 3600
  })
   
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