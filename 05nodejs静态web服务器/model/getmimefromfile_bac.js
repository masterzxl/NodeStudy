var fs = require('fs');
exports.getMime = function(extname){

    // 把readFile()异步方法改成同步
    var data = fs.readFileSync('./mime.json');
    var Mimes = JSON.parse(data.toString());
    return Mimes[extname] || "text/html";

}