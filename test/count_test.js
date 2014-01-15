'use strict';

var count = require('../lib/count.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.count = {
  setUp: function(done) {
    // setup here
    done();
  },
  'all integer': function(test) {
    test.expect(5);

    var str = "1\n2\n3\n";
    var obj = count.run(str);
    test.equal(obj.count, 3, 'should be 3.');
    test.equal(obj.sum, 6, 'should be 6.');
    test.equal(obj.avg, 2, 'should be 2.');
    test.equal(obj.min, 1, 'should be 1.');
    test.equal(obj.max, 3, 'should be 3.');
    test.done();
  },
  'with float': function(test) {
    test.expect(5);

    var str = '1.1\n2.2\n3.3';
    var obj = count.run(str);
    test.equal(obj.count, 3, 'should be 3.');
    test.equal(obj.sum, 6.6, 'should be 6.6.');
    test.equal(obj.avg, 2.1999999999999997, 'should be 2.1999999999999997.');
    test.equal(obj.min, 1.1, 'should be 1.1');
    test.equal(obj.max, 3.3, 'should be 3.3');
    test.done();
  },
  'with string': function(test) {
    test.expect(5);

    var str = '1.1\n2.2\n3.3\naa\nbb';
    var obj = count.run(str);
    test.equal(obj.count, 3, 'should be 3.');
    test.equal(obj.sum, 6.6, 'should be 6.6.');
    test.equal(obj.avg, 2.1999999999999997, 'should be 2.1999999999999997.');
    test.equal(obj.min, 1.1, 'should be 1.1');
    test.equal(obj.max, 3.3, 'should be 3.3');
    test.done();
  }
};
