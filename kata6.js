let repeatNumbers = function(data) {
  let arr = [];
  if (data.length === 1) {
    for (let i = 0; i < data[0][1]; i++) {
      arr.push(data[0][0]);
    }
  } else {
    for (let x = 0; x < data.length; x++) {
      for (let y = 0; y < data[x][1]; y++) {
        if (y === (data[x][1] - 1) && x !== (data.length - 1)) {
          arr.push(data[x][0]);
          arr.push(', ');
        } else {
          arr.push(data[x][0]);
        }
      }
    }
  }
  return arr.join("");
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));