const fs = require('fs');

// 流的方式读取文件 尤其时读取大数据
var count = 0; // 定义次数
var readStream = fs.createReadStream('input.txt');

var str = ''; /*保存数据 */

// 'data' 表示在一块一块读取数据
readStream.on('data',function(chunk){

    str += chunk;
    count ++;
})

// 'end' 表示数据读取完成 
readStream.on('end',function(chunk){

    console.log(str);
    console.log(count);
})

// 'error' 表示数据读取失败
readStream.on('error',function(err){
    console.log(err);
})
