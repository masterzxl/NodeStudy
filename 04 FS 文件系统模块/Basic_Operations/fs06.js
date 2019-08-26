// 6、 fs.readdir 读取目录

var fs = require('fs');

// fs.readdir 读取目录， 会把html文件夹下的所有的目录和文件夹都获取到
fs.readdir('./html',function(err,data){

    if(err){
        console.log(err);
        return false;
    }
    console.log(data);
})