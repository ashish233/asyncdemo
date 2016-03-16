/*var fs = require("fs");

// Asynchronous read
fs.readFile('test.js', function (err, data) {
   if (err) {
       return console.error(err);
   }
   console.log("Asynchronous read: 1" + data.toString());
});

console.log("middle ");

console.log("");
fs.readFile('test.js', function (err, data) {
   if (err) {
       return console.error(err);
   }
   console.log("Asynchronous read: 2 " + data.toString());
});


console.log("Program Ended");

*/

/*
var fs=require('fs');
var async=require('async');

    
function loaddir(path, callback) {
  fs.readdir(path, function (err, filenames) {
    if (err) { callback(err); return; }
    var realfiles = [];
    var count = filenames.length;
    filenames.forEach(function (filename) {
      fs.stat(filename, function (err, stat) {
        if (err) { callback(err); return; }
        if (stat.isFile()) {
          realfiles.push(filename);
        }
        count--;
        if (count === 0) {
          var results = [];
          realfiles.forEach(function (filename) {
            fs.readFile(filename, function (err, data) {
              if (err) { callback(err); return; }
              results.push(data);
              if (results.length === realfiles.length) {
                   console.log(count); 
                 callback(null, results);
              };
            });
          });
        }
      });
    });
  });
}   

loaddir("/home/sharmin/programm/ashish/March14/demo/mean");
*/
var async=require('async');
async.list([1, 8, 3, 5])
  .every(function odd(item) {
    return item % 2 == 0
  }).call();
