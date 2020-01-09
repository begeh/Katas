let sumLargestNumbers = function(data) {
  let arr = data.sort(function(a,b) {
    return a - b;
  });
  return arr[arr.length - 1] + arr[arr.length - 2];
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));