/* globals bench suite set */
'use strict';
const Benchmark = require('benchmark');

const unpivotNpm = require('array-unpivot');
const unpivot = require('../src');
const fixture = require('./fixture');

const suite = new Benchmark.Suite('Array Unpivot', { minTime: 1000 });

suite.add('npm', () => {
  unpivotNpm(fixture);
}).add('master', () => {
  unpivot(fixture);
}).on('cycle', function(event) {
  console.log(String(event.target));
}).on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({ async: true });
