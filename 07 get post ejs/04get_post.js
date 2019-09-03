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

    // 获取请求方式
    method = req.method.toLowerCase();
    
    var pathname = url.parse(req.url,true).pathname;

    // 这就是一个简单的路由，根据不同的url执行不同的操作
    if(pathname == '/login'){ // 跳转到登陆页面
        ejs.renderFile('./views/login.html',{},function(err,data){
            
            res.end(data);
        })

    } else if(pathname == '/dologin'){// 执行登录操作 显示登陆成功的首页面
        
        // get 传值获取数据
        if(method == 'get'){
            console.log(url.parse(req.url,true).query.username);
        }else{
            // 通过post请求
            var postStr = '';
            // 拿到数据
            req.on('data',function(chunk){
                postStr += chunk;
            })
            // 数据读取结束
            req.on('end',function(){
                fs.appendFile('./login.txt',postStr+'\n',function(err){
                    if(err){
                        console.log(err);
                        return false;
                    }
                    else{
                        console.log('写入文件成功！');
                    }
                })
                res.end('<script>alert("登录成功！");history.back();</script>')
                // res.end(postStr);
            })
        }
        // res.end('dologin');
    }else{

        // 第一个参数渲染的页面  第二个参数是传入的数据  第三个参数是回调函数
        ejs.renderFile('./views/index.html',{},function(err,data){
            // 向浏览器输出页面           
            res.end(data);
        })
    }

}).listen(8080); // 设置监听端口