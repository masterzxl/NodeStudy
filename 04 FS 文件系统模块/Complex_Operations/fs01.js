// 1、判断服务器上面有没有upload目录，没有创建这个目录 
// 一般用在图片上传
var fs = require('fs');

// fs.stat('./upload',function(err,stats) {
//     if(err){ /* 表示没有这个目录 */
//         // 创建目录
//         fs.mkdir('./upload',function(err){

//             if(err){
//                 console.log(err);
//                 return false;  
//             }
//             console.log('目录创建成功！');
//         })
//     }
//     else{ /* 这个目录存在 */
//         console.log('该目录已经存在！');
//         // console.log(stats.isDirectory());
//     }
    
// })


//2、找出html目录下面的所有目录 不包括文件

/*   错误写法示例
fs.readdir('./html',function(err,files){
    if(err){
        console.log(err);
        return false;
    }
    else{ // 成功拿到了返回的信息
        // 循环遍历返回的集合中的每一个是不是目录
        for(var i=0;i<files.length;i++){
            fs.stat(files[i],function(err,stats){ // ---这个方法是异步的 错误的 里面files为undefined
                if(err){
                    console.log(err);
                    return false;
                }
                else{
                    if(stats.isDirectory()){
                        console.log(files[i]);
                    }
                }
            })
        }
    }
})
 */


// 正确的写法
var filesArr = []
fs.readdir('./html',function(err,files){
    if(err){
        console.log(err);
        return false;
    }
    else{ // 成功拿到了返回的信息

        // 通过匿名自执行函数来实现
        console.log(files);
        (function getFile(i){

            if(i == files.length){
                console.log(filesArr);
                return false;
            }
            // 注意文件目录，要求是完整的目录
            fs.stat('./html/' + files[i],function(err,stats){
                
                if(stats.isDirectory()){// 当前为目录
                    filesArr.push(files[i]);// 将files[i]添加进filesArr
                }
                // 递归调用自身
                getFile(i+1);
            })
        })(0)
    }
})