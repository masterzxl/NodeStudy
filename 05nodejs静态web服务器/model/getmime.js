exports.getMime = function(extname){
    // 获取后缀名的方法

    switch(extname){

        case '.html':
            return 'text/html';
        case '.js':
            return 'text/javascript';
        case '.css':
            return 'text/css';
        default:
            return 'text/html';
            
    }

}