// 7、 fs.rename 重命名
// 作用 1、修改文件名称
//      2、剪切文件
var fs = require('fs');

// 修改名称
// fs.rename('./html/index.html','./html/new.html',function(err){

//     if(err){
//         console.log(err);
//         return false;
//     }
//     console.log('名称修改成功！');
// })



// 剪切文件
fs.rename('./html/css/basic.css','./html/style.css',function(err){

    if(err){
        console.log(err);
        return false;
    }
    console.log('文件剪切成功！');
})