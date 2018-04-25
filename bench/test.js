const fixture = require('./fixture');
const unpivot = require('../src');

console.log(JSON.stringify(unpivot(fixture), 0, 2));
