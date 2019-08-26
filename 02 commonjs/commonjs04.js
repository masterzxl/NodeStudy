/**
 *test默认在目录下面没有，nodejs会在node_modules里面找这个模块
 */

var test = require('test');
console.log(test.str);