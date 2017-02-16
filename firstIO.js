// let fs = require('fs');

// let buffer = fs.readFileSync(process.argv[2]);

// let buffString = buffer.toString();

// let buffStrArr = buffString.split('\n');

// console.log(buffStrArr.length-1);

//learnyounode solution:
var fs = require('fs');

var contents = fs.readFileSync(process.argv[2]);
var lines = contents.toString().split('\n').length - 1;

console.log(lines);