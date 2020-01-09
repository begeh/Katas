let numberOfVowels = function(data) {
  let arr = data.split("");
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "a" || arr[i] === "i" || arr[i] === "o" || arr[i] === "u" || arr[i] === "e") {
      sum += 1;
    }
  }
  return sum;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));