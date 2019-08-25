// 引入http模块
var http = require('http');

// 引入url模块
var url = require('url');
// 2、用http模块创建服务
/*
req 获取url信息（request）
res 浏览器返回响应信息 （response）
*/

http.createServer(function(req,res){

    // http://localhost:8080/news?aid=123 拿到aid
    // http://localhost:8080/news?aid=123&cid=234 拿到aid和cid
    
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});

    if (req.url != '/favicon.ico'){
        console.log(req.url); // 返回/news?aid=123&cid=234
        // req.url 获取浏览器url信息  
        var result =  url.parse(req.url,true); // url.parse 解析url路径，第二个参数为True,表示把get传值转换成对象

        console.log(result.query); // 返回的是这个信息{ aid: '123', cid: '234' },
        res.write('aid = ' + result.query.aid); // 返回的是对象里面的aid的值
        res.write('cid = ' + result.query.aid); // 返回的是对象里面的cid的值   
    }

    res.write("你好！这是我的第一个node程序！");

    res.end(); // 结束响应

}).listen(8080); // 设置监听端口