array-pivot
=====

[![NPM](https://nodei.co/npm/array-unpivot.png)](https://nodei.co/npm/array-unpivot/)

Pivot arrays of objects by key into a single object with a superset of keys containing arrays of each record's values. Similar to a pivot table in a spreadsheet.

```javascript
var unpivot = require('array-unpivot')

var data = {
  foo: [1311, 41, 159],
  bar: ['cat', 11, 41],
  zzz: [124.31, 55],
  aaa: [12]
};

console.log(unpivot(data))

/*
[ { foo: 1311, bar: 'cat', zzz: 124.31, aaa: 12 },
  { foo: 41, bar: 11, zzz: 55 },
  { foo: 159, bar: 41 } ]
*/

```

API
===

`unpivot(data)`

LICENSE
=======

MIT
