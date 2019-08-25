// 1、引入http模块
var http = require('http');

// 2、用http模块创建服务
/*
req 获取url信息（request）
res 浏览器返回响应信息 （response）
*/

http.createServer(function(req,res){

    // 发送http 头部
    // http 状态值：200 ：OK
    // 设置http头部，状态码是200，文件类型是html, 字符集是utf8
    
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    res.write("你好！这是我的第一个node程序！");

    res.end(); // 结束响应

}).listen(8080); // 设置监听端口