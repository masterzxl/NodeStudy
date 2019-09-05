
var http = require('http');
var ejs = require('ejs');
var app = require('./model/express_router.js');

http.createServer(app).listen(8080);

app.get('/register',function(req,res){

    // console.log('login');
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    res.end('register!');
})

// 登录
app.get('/login',function(req,res){

    ejs.renderFile('./views/login.html',{},function (err,data) {

        res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
        res.end(data);
      })
})

// 执行登录
app.post('/dologin',function(req,res){

    console.log(res.body);
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    res.end("<script>alert('登录成功！'); history.back();</script>");

})

// 首页路由
app.get('/',function(req,res){

    ejs.renderFile('./views/index.html',{},function(err,data){
        res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});

        res.end(data);    
    })
})