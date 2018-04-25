const test = require('ava');
const unpivot = require('./src');

test('unpivot', (t) => {
  const data = {
    foo: [1311, 41, 159],
    bar: ['cat', 11, 41],
    zzz: [124.31, 55],
    aaa: [12],
    kbs: null,
    sbs: { sports: [ 1, 2, 3] },
    mbc: 'moonwha bang song'
  };

  const expected = [
    {foo: 1311, bar: 'cat', zzz: 124.31, aaa:12, kbs: null, sbs: { sports: [ 1, 2, 3] }, mbc: 'moonwha bang song' },
    {foo: 41,   bar: 11, zzz: 55, kbs: null, sbs: { sports: [ 1, 2, 3] }, mbc: 'moonwha bang song' },
    {foo: 159,  bar: 41, kbs: null, sbs: { sports: [ 1, 2, 3] }, mbc: 'moonwha bang song' },
  ];

  t.deepEqual(unpivot(data), expected, 'Pivoted data matches');
});
