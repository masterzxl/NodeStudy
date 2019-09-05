// js中都是对象   所以可以向对象绑定方法

var app = function(){

    console.log('app');
}

// 向app对象绑定方法

app.get = function(){
    console.log('app.get');
}

app.post = function(){
    console.log('app.post');
}

app.post(); // 打印出app.post() 
app(); // 执行app的方法  输出app