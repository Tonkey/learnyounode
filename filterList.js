// var fs = require('fs');
// var path = process.argv[2];
// var fileExt = '.' + process.argv[3];

// fs.readdir(path, function (err, list) {
//     if (err) {
//         return err;
//     }
//     var files = list.filter(function (element) {
//         return element.includes(fileExt);
//     });
//     files.forEach(function (element) {
//         console.log(element);
//     })
// });

//learnyounode solution:
var fs = require('fs');
var path = require('path');

var folder = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(folder, function (err, files) {
    if (err) return console.error(err);
    files.forEach(function (file) {
        if (path.extname(file) === ext) {
            console.log(file);
        }
    });

});
