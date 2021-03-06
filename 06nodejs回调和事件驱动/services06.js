// 1、引入http模块
var http = require('http');
var fs = require('fs');

var mimeModel = require('./model/getmimefromfile_events.js');

// path模块  
var path = require('path'); /** nodeJS自带得模块 */
var events = require('events');

// 创建实例
var EventEmitter = new events.EventEmitter();

// 自定义模块
http.createServer(function(req,res){
   
    var pathname = req.url;

    // 判断请求是否为空
    if(pathname == '/'){
        pathname = '/index.html'; /*默认加载到首页面 */
    }

    // 由于加载得文件中有其他后缀名文件 因此用path.extname() 拿到文件后缀名
    // 获取文件得后缀名
    var extname = path.extname(pathname);

    // 过滤无效的请求
    if(pathname != '/favicon.ico'){
        // 文件操作 获取static 下面的index.html文件
        fs.readFile('./static/' + pathname,function(err,data){
            
            // 没有读取到这个文件
            if(err){/* 没有这个pathname的文件 */
                fs.readFile('./static/404.html',function(error,errdata){
                    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
                    res.write(errdata);
                    res.end();    
                })

            }
            else{
                mimeModel.getMime(extname,EventEmitter);
                // console.log('执行完成mimeModel.getMime(extname);');
                EventEmitter.on('get_Mime',function(mime){
                    res.writeHead(200,{"Content-Type":"" + mime +";charset=utf-8"});
                    res.end(data);
                });    
            }
        })
    }
}).listen(8080); // 设置监听端口