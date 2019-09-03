// 1、引入http模块
var http = require('http');
var fs = require('fs');
var url = require('url');
// path模块  
var path = require('path'); /** nodeJS自带得模块 */

/**
 * 路由： 指的是针对不同请求的URL，处理不同的操作
 */

http.createServer(function(req,res){

    // login  登录的功能  register 实现注册的功能

    var pathname = url.parse(req.url).pathname;

    // 这就是一个简单的路由，根据不同的url执行不同的操作
    if(pathname == '/login'){
        res.write('login');
        res.end();
    } else if(pathname == '/register'){
        res.write('register');
        res.end();
    } else if(pathname == '/order'){
        res.write('order');
        res.end();
    }else{
        res.write('index');
        res.end();
    }

}).listen(8080); // 设置监听端口