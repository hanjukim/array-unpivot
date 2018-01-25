function unpivot(data) {
  const output = [];
  const keys = Object.keys(data);
  const cols = keys.length;
  let rows = 0;

  // set rows as biggest array's length
  keys.forEach(key => rows = (data[key].length > rows && data[key].length) || rows);

  for (let row = 0; row < rows; row += 1) {
    const obj = {};

    for (let col = 0; col < cols; col += 1)
      if (row < data[keys[col]].length)
        obj[keys[col]] = data[keys[col]][row];

    output.push(obj);
  }

  return output;
}

module.exports = unpivot;
