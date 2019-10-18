// 创建数据库连接服务
var MongoClient = require("mongodb").MongoClient;
var ObjectID = require('mongodb').ObjectID;
var dburl = 'mongodb://localhost:27017/';  // 27017 端口号 

function __connectDB(callback){

    MongoClient.connect(dburl,{useNewUrlParser:true},function(err,db){
        if(err){
            console.log("数据库连接失败！");
            return;
        }
        // 增加 删除 修改 
        callback(db);   
    })
}

exports.ObjectID = ObjectID;
// 暴露方法   db.find(user,sql,function(err,data){}) data就是我们要查找的数据
exports.find = function(collectionname,json,callback){
    
    __connectDB(function(db){
        var result = db.db("test").collection(collectionname).find(json);
        result.toArray(function(err,data){

            callback(err,data); /*拿到数据，执行回调函数*/
            db.close();
        })
    })
}

exports.insert = function(collectionname,json,callback){
    
    __connectDB(function(db){
        var result = db.db("test").collection(collectionname).insertOne(json,function(err,data){
            callback(err,data);
            db.close();
        });
    })
}

exports.update = function(collectionname,json1,json2,callback){
    
    __connectDB(function(db){
        var result = db.db("test").collection(collectionname).updateOne(json1,{$set:json2},function(err,data){
            callback(err,data);
            db.close();
        });
    })
}

exports.delete = function(collectionname,json,callback){
    
    __connectDB(function(db){
        var result = db.db("test").collection(collectionname).deleteOne(json,function(err,data){
            callback(err,data);
            db.close();
        });
    })
}

