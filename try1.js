 var async = require('async');
var fs=require('fs');
var items = [0,1,2,3,4,5,6,7,8,9]; // this is to simulate an array of items to process

async.eachSeries(items,
    function(item, callback){
        console.log('start processing item:',item);
        //simulate some async process like a db CRUD or http call...
        var randomExecutionTime = Math.random() * 2000;
        setTimeout(function(index){
                        //this code runs when the async process is done
                        console.log('async Operation Finished. item:',index);
                      callback(); //call the next item function
                    },randomExecutionTime,item);
    },
    function(err){
        if(err){
            console.log('Got an error')
        }else{
            console.log('All tasks are done now...');
        }
    }
);

async.sortBy(['try.js','async.js'], function(file, callback){
    fs.stat(file, function(err, stats){
        callback(err, stats.mtime);
    });
}, function(err, results){
    // results is now the original array of files sorted by
    // modified date
    console.log(results);
});



var count = 0;

async.whilst(
    function () { return count < 5; },
    function (callback) {
        count++;
            console.log(count);
            setTimeout(function () {
            callback(null, count);
        }, 1000);
    },
    function (err, n) {
        // 5 seconds have passed, n = 5
        
    }
);


function add1(n, callback) {
    setTimeout(function () {
        callback(null, n + 1);
    }, 10);
}

function mul3(n, callback) {
    setTimeout(function () {
        callback(null, n * 3);
    }, 10);
}

var add1mul3 = async.compose(mul3, add1);

add1mul3(4, function (err, result) {
   console.log(result)
});



// create a queue object with concurrency 2

var q = async.queue(function (task, callback) {
    console.log('hello ' + task.name);
    callback();
}, 2);


// assign a callback
q.drain = function() {
    console.log('all items have been processed');
}

// add some items to the queue

q.push({name: 'foo'}, function (err) {
    console.log('finished processing foo');
});
q.push({name: 'bar'}, function (err) {
    console.log('finished processing bar');
});

// add some items to the queue (batch-wise)

q.push([{name: 'baz'},{name: 'bay'},{name: 'bax'}], function (err) {
    console.log('finished processing item');
});

// add some items to the front of the queue

q.unshift({name: 'bar'}, function (err) {
    console.log('finished processing bar');
});
