const squareCode = function (message) {
  //Create variable where there are no spaces
  let square = message.split(" ").join("");
  //Find size of columns rectangle/square
  let num = Math.ceil(Math.sqrt(square.length));
  let output = [];

  for (let i = 0; i < num; i++) {
    //Create an array to hold each individual row
    let arr = [];
    for (let j = i; j < square.length; j += num) {
      arr.push(square[j]);
      //Once the row is full made, add it to the output array and combine to a string
      if ((j + num) >= square.length) {
        output.push(arr.join(""));
      }
    }
  }
  //Output array of rows and add a space between them to distinguish one row from another
  return output.join(" ");
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));