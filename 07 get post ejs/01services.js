// 1、引入http模块
var http = require('http');
var fs = require('fs');
// path模块  
var path = require('path'); /** nodeJS自带得模块 */

var router = require('./model/router.js');

http.createServer(function(req,res){

    router.statics(req,res ,'static'); 
    // console.log(req.url);
}).listen(8080); // 设置监听端口