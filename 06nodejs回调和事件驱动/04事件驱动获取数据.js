var fs = require('fs');

var events = require('events');

var EventEmitter = new events.EventEmitter();// 实例化一个对象
var EventEmitter1 = new events.EventEmitter();// 实例化一个对象



// 通过on来监听'to_parent'广播事件
EventEmitter.on('to_parent',function(data){
    console.log('to_parent接收到了广播！');
    console.log(data);
    
})

setTimeout(function(){
    EventEmitter1.emit('to_parent','EventEmitter1发送的事件！');
},200);

