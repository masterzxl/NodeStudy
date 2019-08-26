// 这个config文件是config配置文件模块

var str = "this is config";

// 通过exports 或者module.exports 暴露文件中的属性或者方法
// exports.str = str; // 一种方式
module.exports = str; // 另一种方式