
var fs = require('fs');

// 2、 fs.mkdir 创建目录
// 参数 path:即将创建的目录路径  mode:目录权限(读写权限)，默认0777  callback：回调，传递异常参数

fs.mkdir('css',function (err) {
    
    if(err){
        console.log(err);
        return false;
    }
    console.log('创建目录成功！');
    
})