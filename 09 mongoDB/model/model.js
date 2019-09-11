var ejs = require('ejs');
var fs = require('fs');
var app = {
    login:function(req,res) {
        console.log('login');
        ejs.renderFile('./views/login.html',{},function(err,data){
            res.end(data);
        })
      },

    register:function(req,res) {
        console.log('register');
        res.end('路由中的register!');
      },
      home:function(req,res){
          res.end('路由中的home');
      },
      dologin:function(req,res){
          // 通过post请求
            var postStr = '';
            // 拿到数据
            req.on('data',function(chunk){
                postStr += chunk;
            })
            // 数据读取结束
            req.on('end',function(){
                fs.appendFile('./login.txt',postStr+'\n',function(err){
                    if(err){
                        console.log(err);
                        return false;
                    }
                    else{
                        console.log('写入文件成功！');
                    }
                })
                res.end('<script>alert("登录成功！");history.back();</script>')
                // res.end(postStr);
            })
      }
}

module.exports = app;