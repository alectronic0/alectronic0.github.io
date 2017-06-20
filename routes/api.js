//
//var express = require('express');
//var router = express.Router();
//
/////* GET home page. */
////router.use(function(req,res,next){
////  if(req.method === "GET"){return next();}
////  return next();
////});
////
////
////
////
////
////router.route('/magic')
////
////  .get(function(reg,res){
////    var path = "img/exp/";
////
////    var _getAllFilesFromFolder = function(dir) {
////      var filesystem = require("fs");
////      var results = [];
////      filesystem.readdirSync(dir).forEach(function(file) {
////          file = dir+'/'+file;
////          console.log(file);
////          var stat = filesystem.statSync(file);
////          if (stat && stat.isDirectory()) {results = results.concat(_getAllFilesFromFolder(file))}
////          else results.push({img: file});
////      });
////      return results;
////    };
////
////    return res.send(_getAllFilesFromFolder(path));
////  });
//
//module.exports = router;
