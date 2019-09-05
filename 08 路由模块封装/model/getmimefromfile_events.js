var fs = require('fs');

// var events = require('events');
// // 创建实列
// var EventEmitter = new events.EventEmitter();

// 获取文件后缀名所对应的文件类型   例如：.css ==>  text/css
exports.getMime = function(extname,EventEmitter){  /** extname 是 .html/.css/.png 文件的后缀名 */
    // 通过fs读取文件
    fs.readFile('./mime.json',function(err,data){
        if(err){
            console.log('mime.json文件不存在！');
            return false;
        }

        var mime = JSON.parse(data.toString());

        console.log(mime[extname] + '------ 开始发送广播');
        // 通过事件驱动发送广播
        EventEmitter.emit('get_Mime',mime[extname]);
        console.log('广播发送完成！');
    })
}