"use strict";

function unpivot(data) {
  var output = [];
  var keys = Object.keys(data);
  var cols = keys.length;
  var row;
  var col;
  var rows = 0; // set rows as biggest array's length

  for (col = 0; col < cols; col += 1) {
    var val = data[keys[col]];
    rows = Array.isArray(val) && val.length > rows && val.length || rows;
  }

  for (row = 0; row < rows; row += 1) {
    var obj = {};

    for (col = 0; col < cols; col += 1) {
      var _val = data[keys[col]];

      if (Array.isArray(_val)) {
        if (row < _val.length) {
          obj[keys[col]] = _val[row];
        }
      } else {
        obj[keys[col]] = _val;
      }
    }

    output.push(obj);
  }

  return output;
}

module.exports = unpivot;