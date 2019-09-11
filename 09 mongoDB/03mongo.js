// 查询数据库

var url = require("url");
var http = require('http');
var ejs = require('ejs');
var app = require('./model/express_router.js');

var MongoClient = require("mongodb").MongoClient;
var dburl = 'mongodb://localhost:27017/'; // 27017 端口号  test 为数据库的名称
http.createServer(app).listen(8080);

app.get('/register', function (req, res) {

    // console.log('login');
    res.writeHead(200, {
        "Content-Type": "text/html;charset=utf-8"
    });
    res.end('register!');
})

// 登录
app.get('/login', function (req, res) {

    ejs.renderFile('./views/login.html', {}, function (err, data) {

        res.writeHead(200, {
            "Content-Type": "text/html;charset=utf-8"
        });
        res.end(data);
    })
})

// 执行登录
app.post('/dologin', function (req, res) {

    console.log(res.body);
    res.writeHead(200, {
        "Content-Type": "text/html;charset=utf-8"
    });
    res.end("<script>alert('登录成功！'); history.back();</script>");

})

// 首页路由
app.get('/', function (req, res) {

    ejs.renderFile('./views/index.html', {}, function (err, data) {
        res.writeHead(200, {
            "Content-Type": "text/html;charset=utf-8"
        });

        res.end(data);
    })
})

// 查询数据库
app.get('/select', function (req, res) {

    MongoClient.connect(dburl, {useNewUrlParser: true}, function (err, db) {
        if (err) {
            console.log("数据库连接失败！");
            return;

        }
        var list = []; /**打算放数据库里面查询的所有的数据 */
        var dbo = db.db("test");
        var result = dbo.collection("user").find().toArray((err, docs)=>{
            docs.forEach(function(item){
                    list.push(item);

            });
            console.log(list);
            ejs.renderFile("./views/index.html",{msg:list},function(err,data){
                res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
                res.end(data);
                db.close();
            })
        });
    })
        
})
