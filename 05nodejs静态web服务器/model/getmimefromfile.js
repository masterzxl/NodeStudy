var fs = require('fs');
exports.getMime = function(extname){
    // 获取后缀名的方

    fs.readFile('./mime.json',function(err,data){

        if(err){
            console.log('mime.json文件不存在！');
            return false;
        }
        // console.log(data.toString());
        var Mime = JSON.parse(data.toString());
        return Mime[extname] || 'text/html';
    })
}