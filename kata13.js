const urlDecode = function (text) {
  let obj = {};
  text = text.split("&");
  for (let i = 0; i < text.length; i++) {
    text[i] = text[i].split("=");
    for (let j = 0; j < text[i].length; j++) {
      text[i][j] = text[i][j].split("%20");
      text[i][j] = text[i][j].join(" ");
    }
    for (let x = 0; x < text.length; x++) {
      obj[text[i][0]] = text[i][1];
    }
  }
  return obj;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);