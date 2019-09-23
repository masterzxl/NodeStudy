var express = require("express");
var app = new express();

var session = require("express-session");
// 配置中间件   浏览器关闭之后就session就消失了
app.set('trust proxy', 1);
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // cookie = true只有在https这样的情况才能使用
}))

app.get("/",function (req,res) { 
    // 获取session中的属性
    if(req.session.username){
        res.send("你好" + req.session.username + ",欢迎回来！");
    }else{
        res.send("未登录！");
    }
})

 app.get("/login",function (req,res) {
     // 设置session
     req.session.username = "张三";
     res.send("登陆成功！");
  })

  app.listen(8080);