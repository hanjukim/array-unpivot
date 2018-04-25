function unpivot(data) {
  const output = [];
  const keys = Object.keys(data);
  const cols = keys.length;
  let row;
  let col;
  let rows = 0;

  // set rows as biggest array's length
  for (col = 0; col < cols; col += 1) {
    const val = data[keys[col]];
    rows = (Array.isArray(val) && val.length > rows && val.length) || rows;
  }

  for (row = 0; row < rows; row += 1) {
    const obj = {};

    for (col = 0; col < cols; col += 1) {
      const val = data[keys[col]];

      if (Array.isArray(val)) {
        if (row < val.length) {
          obj[keys[col]] = val[row];
        }
      } else {
        obj[keys[col]] = val;
      }
    }

    output.push(obj);
  }

  return output;
}

module.exports = unpivot;
