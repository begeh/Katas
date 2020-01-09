let camelCase = function(input) {
  let arr = input.split(" ");
  let arr2 = [];
  arr2.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    arr2.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
  }
  return arr2.join("");
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));