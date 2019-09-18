var express = require("express");
var app = new express();

var cookieParser = require("cookie-parser");

// 设置中间件
app.use(cookieParser("sign"));

app.get("/",function (req,res) {  

    res.send("浏览过的城市是" + req.signedCookies.cities);
 })

app.get("/lvyou",function (req,res) { 

    // 获取路由的get参数
    var city = req.query.city;
    var cities = req.signedCookies.cities;
    // 写入数据时要进行判断，是否有重复值 这里的代码没有判断
    if(cities){ // 判断是否有值，有值则添加 
        cities.push(city);
    }else{ // 没有则创建一个数组，再添加
        cities = []
        cities.push(city);
    }
    res.cookie("cities",cities,{maxAge:60*1000*10,signed:true});

    res.send("浏览过的城市是" + city);
 })

app.listen(8080);