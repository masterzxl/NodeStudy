// 命令行 npm install md5-node 
// 注意：以后安装模块的时候我们要把这个模块写入package.json这个配置文件

//  npm install md5-node --save 或者 npm install md5-node --save-dev
//  npm install md5-node --save       这种方式会写入到package.json 的 dependencies
//                               dependencies 表示配置当前程序所依赖的其他包
//  npm install md5-node --save-dev   这种方式写入到package.json 的 devDependencies
//                               devDependencies 表示配置当前程序所依赖的其他包，只会下载模块，
//                               而不下载这些模块的测试和文本文档

// npm install 表示安装依赖


/**
 * 有时候会遇到npm install 下载不下来或者下载很慢
 * 
 * 如果安装完成淘宝镜像，通过 cnpm install
 */

var md5 = require('md5-node');
var sd = require('silly-datetime');
// 
// md5-node 加密包
console.log('原始字符串：123456');
console.log('加密之后的字符串：' + md5('123456'));
console.log();

var date = sd.format(new Date(),'YYYY-MM-DD HH:mm:ss');

console.log("原始时间字符串：" + date);

console.log("加密之后的时间字符串：" + md5(date));