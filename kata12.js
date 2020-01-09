const makeCase = function(input, capital) {
  let result = [];
  //Creates an array of cases from the capital variable
  let cases = [];
  if (capital.length > 3) {
    cases.push(capital);
  } else {
    cases = capital;
  }
  //Checks for priority 1 cases and mutates result based on case
  for (let x = 0; x < cases.length; x++) {
    let arr = input.split(" ");
    switch (cases[x]) {
    case "camel":
      result.push(arr[0]);
      for (let i = 1; i < arr.length; i++) {
        result.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
      }
      result = result.join("");
      break;
    case "pascal":
      for (let i = 0; i < arr.length; i++) {
        result.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
      }
      result = result.join("");
      break;
    case "snake":
      result = arr.join("_");
      break;
    case "kebab":
      result = arr.join("-");
      break;
    case "title":
      for (let i = 0; i < arr.length; i++) {
        result.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
      }
      result = result.join(" ");
    }
  }
  /*Checks for whether result was changed through first priority case and if not changes result to original string for mutation after check for priority 2 cases*/
  if (result.length === 0) {
    result = input;
  }
  //Checks for priority 2 cases and alters result if it exists in cases variable
  for (let x = 0; x < cases.length; x++) {
    switch (cases[x]) {
    case "vowel":
      for (let i = 0; i < result.length; i++) {
        if (result[i] === "a" || result[i] === "e" || result[i] === "i" || result[i] === "o" || result[i] === "u") {
          result = result.slice(0, i) + result[i].toUpperCase() + result.slice(i + 1);
        }
      }
      break;
    case "consonant":
      for (let i = 0; i < result.length; i++) {
        if (result[i] !== "a" && result[i] !== "e" && result[i] !== "i" && result[i] !== "o" && result[i] !== "u") {
          result = result.slice(0, i) + result[i].toUpperCase() + result.slice(i + 1);
        }
      }
    }
  }

  /*Checks for whether result was changed through second priority case and if not changes result to original string for mutation after check for priority 3 cases*/
  if (result.length === 0) {
    result = input;
  }
  //Checks for priority 3 cases in cases variable and, if present, alters result accordingly
  for (let x = 0; x < cases.length; x++) {
    switch (cases[x]) {
    case "upper":
      result = result.toUpperCase();
      break;
    case "lower":
      result = result.toLowerCase();
    }
  }
  return result;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));