// 引进http模块
var http = require("http");

// 引入自定义的config模块
var config = require('./config.js');

// 创建Server
var app = http.createServer(function(req,res){

    // 设置响应头
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});

    res.write("commonjs模块！");
    console.log(config);
    // 结束响应
    res.end();

});

// 设置监听端口
app.listen(8080);

/**
 * 1、我们可以把公共的功能抽离成一个单独的js文件作为一个模块，
 * 默认情况下面这个模块里面的方法或者属性，外面是没法访问的，
 * 如果让外部的文件可以访问模块里面的方法或者属性，必须在模块里面通过exports或者
 * module.export暴露属性或者方法。
 * 
 * 2、在需要使用这些模块的文件中，通过require的方式引入这个模块，这个时候就可以使用
 * 模块里面暴露的属性和方法。
 */