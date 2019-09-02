var events = require('events');

var EventEmitter = new events.EventEmitter();// 实例化一个对象

var mimeModel = require('./model/getmimefromfile_events.js');

// 广播和接受广播

// 通过on来监听'to_parent'广播事件
EventEmitter.on('to_parent',function(data){
    console.log('to_parent接收到了广播！');
    EventEmitter.emit('to_mime',data);
})

EventEmitter.on('to_mime',function(data){
    console.log('to_mime接收到了广播！');
    console.log(data);
})

setTimeout(function(){

    console.log('开始广播！');
    // 通过emit发送’to_parent‘广播事件
    EventEmitter.emit('to','zxl发送');
},2000);

