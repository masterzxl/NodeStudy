// 9、 fs.unlink 删除文件

var fs = require('fs');

// 修改名称
fs.unlink('./index.txt',function(err){

    if(err){
        console.log(err);
        return false;
    }
    console.log('删除文件成功！');
})