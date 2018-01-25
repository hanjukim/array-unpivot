var test = require('tape').test
var unpivot = require('../unpivot')

test('unpivot', function (t) {
  var data = {
    foo: [1311, 41, 159],
    bar: ['cat', 11, 41],
    zzz: [124.31, 55],
    aaa: [12]
  };

  var expected = [
    {foo: 1311, bar: 'cat', zzz: 124.31, aaa:12},
    {foo: 41,   bar: 11, zzz: 55},
    {foo: 159,  bar: 41}
  ];

  t.deepEquals(unpivot(data), expected, 'Pivoted data matches');
  t.end();
});

