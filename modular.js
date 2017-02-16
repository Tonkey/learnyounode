var fs = require('fs');
var path = require('path');

module.exports = function(dirName, fileExt, callback){
    fileExt = '.'+fileExt;
    var returnList = [];
    fs.readdir(dirName, function(err, data){
        if(err){
            return callback(err);
        }
        data.forEach(function(file){
            if(path.extname(file) === fileExt){
                returnList.push(file);
            }
        });
        callback(null, returnList);
    })
};