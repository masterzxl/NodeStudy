// 5、 fs.readFile 读取文件

var fs = require('fs');

fs.readFile('./index.txt',function(err,data){

    if(err){
        console.log(err);
        return false;
    }
    

    // 输出的为16进制
    console.log('16进制形式：')
    console.log(data);

    // 转换成字符串
    console.log('字符串形式：');
    console.log(data.toString());
})