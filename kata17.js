let prompt = require("prompt-sync")();
//Randomly assigns secret number between 0 and 10. Rounds the number to nearest integer.
let number = Math.round(Math.random() * 10);

//Count is an array variable to take unique guesses about the secret number
let count = [];
for (let i = 1; i > 0; i++) {
  let answer = prompt("Guess a number: ");
  //Assigns the inputs of "x" or "X" as exit prompts for the number guess game
  if (answer === "x" || answer === "X") {
    //Setting i variable to any negative number acts as an exit from the loop after current iteration
    i = -5;
  } else if (answer === number.toString()) {
    count.push(answer);
    if (count.length === 1) {
      console.log("Congrats!! You guessed it. The secret number is " + answer + ". You got it in " + count.length + " try.");
    } else {
      console.log("Congrats!! You guessed it! The secret number is " + answer + ". You got it in " + count.length + " tries.");
    }
    i = -5;
  } else if (answer !== number) {
    if (isNaN(answer) === true) {
      console.log("Not a number. Please try again.");
    } else {
      if (count.includes(answer) === true) {
        console.log("Already guessed that.");

      } else {
        count.push(answer);
        if (answer > number) {
          console.log("Your answer: " + answer + ", is too large. Try again.");
        } else if (answer < number) {
          console.log("Your answer: " + answer + ", is too small. Try again.");
        }
      }
    }
  }
}