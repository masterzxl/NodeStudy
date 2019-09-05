// js中都是对象   所以可以向对象绑定方法
var G = {};

var app = function(req,res){

    if(G['login']){
        // 执行
        G['login'](req,res); 
    }
}

// 定义一个方法
app.get = function(string,callback){
    G[string] = callback;
}

// 执行app.get方法
app.get('login',function(req,res){

    console.log('login');
})


// 执行app()方法
app('req','res');