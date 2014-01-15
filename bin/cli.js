#!/usr/bin/env node

var count = require('../lib/count');

var str = "";
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk) {
    str += chunk;
});

process.stdin.on('end', function() {
    count.print(count.run(str));
});

process.stdin.on('error', function(err) {
    throw err;
});


