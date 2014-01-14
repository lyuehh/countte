#!/usr/bin/env node

var str = "";
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk) {
    str += chunk;
});

process.stdin.on('end', function() {
    run(str);
});

process.stdin.on('error', function(err) {
    throw err;
});

function run(str) {
    var arr = str.split('\n');
    var l = arr.length-1;
    var count = 0;
    var sum = 0;
    var min;
    var max;
    var avg;

    for (var i=0; i<l; i++) {
        var n;
        if (arr[i] === '') {
            n = 0;
        } else {
            n = parseFloat(arr[i]);
            count += 1;
        }
        if (isNaN(n)) {
            throw 'can only include number, found ' + arr[i];
        }
        
        sum += n;
    }
    console.log('count: %s', count);
    console.log('sum: %s', sum)
    console.log('avg: %s', sum/count);
}
