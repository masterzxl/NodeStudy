var express = require("express");
var app = new express();

var session = require("express-session");
// 配置中间件   浏览器关闭之后就session就消失了
app.set('trust proxy', 1);
app.use(session({
  secret: 'keyboard cat', // 可以随便写，一个String类型的字符串，作为服务器生成session的签名（加密用的）
//   name: "key", // 返回客户端的key的名称，默认为connect.sid，也可以自己设置
  resave: false, // 强制保存session即使它没有变化，默认为true ， 建议设置成false
  saveUninitialized: true, // 强制将未初始化的session存储，
  cookie: { // 之前跟cookie-parser 中可以设置的cookie的属性在这个里面都可以设置
    maxAge:60000,
    secure: false // secure = true只有在https这样的情况才能使用cookie http情况是则不能的使用 
     },
  rolling:true // 在每次请求时强行设置cookie,这将重置cookie过期时间（默认：false） 
   
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

  app.listen(8080);