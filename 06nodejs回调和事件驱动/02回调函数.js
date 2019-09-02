var fs = require('fs');

// console.log(getMime()); /**有问题 异步拿不到数据 */

function getMime(callback){ //
    fs.readFile('./mime.json',function(err,data){

        callback(data.toString());
    })
}

// 通过回调函数来拿到数据
getMime(function(result){

    console.log(result);
})