// 1、引入http模块
var http = require('http');
var url = require('url');
// path模块  
var path = require('path'); /** nodeJS自带得模块 */

var model = require('./model/model.js');

http.createServer(function(req,res){

    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
    var pathname = url.parse(req.url).pathname.replace('/','');

    if(pathname != 'favicon.ico'){
        // 触发相对应的路由的方法
        try{
            model[pathname](req,res);
        }catch{
            model['home'](req,res);
        }


    }

}).listen(8080); // 设置监听端口