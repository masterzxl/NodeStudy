// 暴露的模块
var url = require('url');

var server = function(){

    var G = this; // 全局变量

    this.get = {};

    this.post = {};


    var app = function(req,res){

         // 获取路由 pathname = '/login'
        var pathname = url.parse(req.url).pathname; 

        // 获取请求方式
        var method= req.method.toLowerCase();

        if(!pathname.endsWith('/')){
            pathname = pathname + '/';
        }

        // 判断是post还是get请求
        if(G[method][pathname]){
            if(method == 'post'){

                // 通过post请求
                var postStr = '';
                // 拿到数据
                req.on('data',function(chunk){
                    postStr += chunk;
                })
                // 数据读取结束
                req.on('end',function(){

                    // req.body = postStr; /**给req增加了一个body属性，将拿到的数据存放在req.body这个属性中 */
                    res.body = postStr; /**也可以将拿到的数据存绑定在res.body这个属性中 */
                    G[method][pathname](req,res);
                })

                }else{ /**get 请求  */
                    G[method][pathname](req,res);
                }
        }
        else{
            res.end('No router');
        }

    }

    app.get = function(string,callback){

        if(!string.endsWith('/')){
            string = string + '/';
        }
        if(!string.startsWith('/')){
            string = '/' + string;
        }
        G.get[string] = callback;
    }

    app.post = function(string,callback){

        if(!string.endsWith('/')){
            string = string + '/';
        }
        if(!string.startsWith('/')){
            string = '/' + string;
        }
        G.post[string] = callback;
    }
    return app;
}

module.exports = server();
