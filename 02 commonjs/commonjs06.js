// 想实现 var bar = require('bar'); 通过require直接拿到bar.js文件
var nva = require('nva');

// nva  根目录不存在 ，去node_modules里面找，找到了nva文件夹，
// nva文件夹下面有package.json, 找package.json入口文件 "main": "nva.js"
// 相当于是这个目录下面的main函数，进入程序的入口

console.log(nva.str);

// 通过npm init --yes生成一个package.json 文件