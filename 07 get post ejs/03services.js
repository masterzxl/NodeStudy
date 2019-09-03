// 1、引入http模块
var http = require('http');
var fs = require('fs');
var url = require('url');
// path模块  
var path = require('path'); /** nodeJS自带得模块 */

// 引入EJS模板包
// <% %> 流程控制标签   <%= %>输出(原文输出HTML标签)   <%- %>输出(HTML会被浏览器解析 ) 
var ejs = require('ejs');

http.createServer(function(req,res){

    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
        
    // login  登录的功能  register 实现注册的功能

    var pathname = url.parse(req.url).pathname;

    // 这就是一个简单的路由，根据不同的url执行不同的操作
    if(pathname == '/login'){

        var data = '你好我是后台数据！';
        var list_str = ['111','222','3333'];
        // 把数据库的数据渲染到模板上面
        
        // 第一个参数渲染的页面  第二个参数是传入的数据  第三个参数是回调函数
        ejs.renderFile('./views/login.html',{
            msg:data,list:list_str
            },function(err,data){
            res.end(data);
        })

    } else if(pathname == '/register'){
        var data = '这是注册页面！也是注册路由！';
        // 把数据库的数据渲染到模板上面
        var h = '<h2>这是一个H2标签数据</h2>'
        // 第一个参数渲染的页面  第二个参数是传入的数据  第三个参数是回调函数
        ejs.renderFile('./views/register.html',{
            msg:data,h2:h
            },function(err,data){
            res.end(data);
        })
    } else if(pathname == '/order'){
        res.write('order');
        res.end();
    }else{
        res.write('index');
        res.end();
    }

}).listen(8080); // 设置监听端口