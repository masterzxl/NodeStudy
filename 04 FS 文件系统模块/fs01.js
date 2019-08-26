/**
 *  FS模块能够让我们操作服务器上的文件
 *  1、 fs.stat 检测是文件还是目录
 *  2、 fs.mkdir 创建目录
 *  3、 fs.writeFile 创建写入文件
 *  4、 fs.appendFile 追加文件
 *  5、 fs.readFile 读取文件
 *  6、 fs.readdir 读取目录
 *  7、 fs.rename 重命名
 *  8、 fs.rmdir 删除目录
 *  9、 fs.unlink 删除文件
 */

var fs = require('fs');

// 1、 fs.stat 检测是文件还是目录 第一个参数是路径 第二个参数是回调函数 
// console.log('html文件');
// fs.stat('./html',function(err,stats){
//     if(err){

//         console.log(err);
//         return false;
//     }

//     console.log('文件：' + stats.isFile());
//     console.log('目录：' + stats.isDirectory());
// })

console.log("index.txt");
fs.stat('./index.txt',function(err,stats){
    if(err){

        console.log(err);
        return false;
    }

    console.log('文件：' + stats.isFile());
    console.log('目录：' + stats.isDirectory());
})