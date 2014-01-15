/*
 * count
 * https://github.com/lyuehh/count
 *
 * Copyright (c) 2014 lyuehh
 * Licensed under the MIT license.
 */

'use strict';

function run(str) {
    var arr = str.split('\n');
    arr = arr.map(function(i) {
        return parseFloat(i);
    }).filter(function(i) {
        return !isNaN(i);
    });

    var count = arr.length;
    var sum = 0;
    var min = arr[0];
    var max = arr[0];

    for (var i=0; i<count; i++) {
        var n = arr[i];
        if (n > max) {
            max = n;
        }
        if (n < min) {
            min = n;
        }
        sum += n;
    }
    var avg = sum/count;

    return {
        count: count,
        sum: sum,
        avg: avg,
        min: min,
        max: max
    };
}

function print(obj) {
    console.log('count : %s', obj.count);
    console.log('sum   : %s', obj.sum);
    console.log('avg   : %s', obj.avg);
    console.log('min   : %s', obj.min);
    console.log('max   : %s', obj.max);
}

exports.run = run;
exports.print = print;
