const multiplicationTable = function (maxValue) {
  let table = [];
  for (let i = 1; i <= maxValue; i++) {
    let arr = [];
    for (let x = 1; x <= maxValue; x++) {
      arr.push(i * x);
      if (x === maxValue) {
        table.push(arr);
      }
    }
  }
  let tableFinal = [];
  for (let j = 0; j < table.length; j++) {
    tableFinal.push(table[j].join(" "));
  }
  return tableFinal.join("\n");
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));