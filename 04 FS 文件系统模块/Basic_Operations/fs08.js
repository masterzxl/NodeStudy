// 8、 fs.rmdir 删除目录

var fs = require('fs');


// 修改名称
fs.rmdir('./t',function(err){

    if(err){
        console.log(err);
        return false;
    }
    console.log('删除目录成功！');
})