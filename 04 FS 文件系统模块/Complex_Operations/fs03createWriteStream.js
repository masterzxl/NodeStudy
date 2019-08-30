const fs = require('fs');

var data = '我是从数据库获取的数据，我要保存起来\n';
// 创建一个写入流，写入到文件output.txt
var writeStream = fs.createWriteStream('./output.txt');
for(var i=0;i<11;i++){
    writeStream.write(data,'utf-8');
}
// 标记写入完成，将会广播一个finish事件，下面通过on来接受广播
writeStream.end();

writeStream.on('finish',function(){

    console.log('写入完成！');
})

// 写入也可能失败，所有也要监听失败的广播
writeStream.on('error',function(){
    console.log('写入失败！');
})
