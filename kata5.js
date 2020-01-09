const urlEncode = function(text) {
  let str = text.trim().split("");
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      str.splice(i, 1, "%20");
    }
  }
  return str.join("");
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));