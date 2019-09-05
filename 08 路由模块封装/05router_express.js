
var http = require('http');

var url = require('url');
var G = {};
// 定义方法 开始和结束
var app = function(req,res){

    // 获取路由 pathname = '/login'
    var pathname = url.parse(req.url).pathname; 

    if(!pathname.endsWith('/')){
        pathname = pathname + '/';
    }
    if(G[pathname]){
        // 执行
        G[pathname](req,res); 
    }
    else{ // 路由不存在的情况
        res.end('No Router!');
    }
}

http.createServer(app).listen(8080);
 
// 定义一个方法
app.get = function(string,callback){

    if(!string.endsWith('/')){
        string = string + '/';
    }
    if(!string.startsWith('/')){
        string = '/' + string;
    }
    G[string] = callback;
}

// 注册登录的路由
app.get('login',function(req,res){

    console.log('login');
    res.end('login');
})

app.get('register',function(req,res){

    console.log('register');
    res.end('register');
})