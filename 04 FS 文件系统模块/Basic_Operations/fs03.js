// 写入文件
// 3、 fs.writeFile 创建写入文件

var fs = require('fs');

// 参数列表
// filename (String) 文件名称
// data (String/Buffer) 将要写入的内容，可以使用字符串或者buffer数据
// options (Object) option数组对象，包括：
//       * encoding (string) 可选值，默认utf8，当data是buffer时，该值应该为ignored
//       * mode (Number) 文件的读写权限，默认值438
//       * flag (String) 默认值 ‘w’
// callback {function} 回调，传递一个异常参数err


// fs.writeFile这个方法在即将写入的文件不存在时会创建文件
// 如果向存在的文件写入，新写入的内容将之前的全覆盖掉

fs.writeFile('./t.txt','你好nodejs  222',function(err){
     if(err){
        console.log(err);
        return false;
    }
    console.log('文件写入成功！');

});