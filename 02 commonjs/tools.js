/**
 * 1、我们可以把公共的功能抽离成一个单独的js文件作为一个模块，
 * 默认情况下面这个模块里面的方法或者属性，外面是没法访问的，
 * 如果让外部的文件可以访问模块里面的方法或者属性，必须在模块里面通过exports或者
 * module.export暴露属性或者方法。
 * 
 * 2、在需要使用这些模块的文件中，通过require的方式引入这个模块，这个时候就可以使用
 * 模块里面暴露的属性和方法。
 */

var tools = {

    add : function (x,y) { 
        return x+y;
     },
     sayHello:function () {
         return "你好 NodeJs";
       }
}
// 这种暴露方法是将整个tools对象暴露出去
// exports.tools = tools;

// 这种暴露方法是将tools的对象内容暴露
module.exports = tools;