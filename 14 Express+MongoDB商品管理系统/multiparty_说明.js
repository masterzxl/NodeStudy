/**
 * 1、npm install multiparty --save
 * 
 * 2、var multiparty = require("multiparty");
 * 
 * 3、上传图片的地方
 * 
 * var form = new multiparty.Form();
 * 
 * form.uploadDir = "upload";  上传图片保存地址的地方
 * 
 * form.parse(req, function(err,fields,files){
 *      获取提交的数据以及图片上传成功的图片信息
 * })
 * 
 * 4、html页面form表单中添加 enctype="multiparty/form-data"
 */