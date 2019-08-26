/**
 * 将自己想要的js文件包去www.npmjs.com官网上搜索，
 * 在想要引入的文件夹目录下命令行安装
 */

// 1、npm i silly-datetime --save 命令行安装silly-datetime包
// 2、引入silly-datetime模块
var sd = require('silly-datetime');

var http = require('http');

var app = http.createServer(function(req,res){

    // 设置响应头
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});

    res.write("导入silly-datetime第三方包！");

    // 格式化日期  
    var date = sd.format(new Date(),'YYYY-MM-DD HH:mm:ss');

    res.write(date);

    // 结束响应
    res.end();
})

// 设置监听端口号
app.listen(8080);


// npm -v 查看npm的版本
// npm uninstall 模块名称  卸载包
// npm list  查看安装的包
// npm info 包名称  查看包名称
// npm install 包名称@版本号  安装指定版本的包