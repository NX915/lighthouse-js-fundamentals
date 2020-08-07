const urlDecode = function(text) {
  // Put your solution here
  const output = {};
  while (text.indexOf('%20') !== -1) {
    text = text.slice(0, text.indexOf('%20')) + ' ' + text.slice(text.indexOf('%20') + 3, text.length);
  }
  text = text.split('&');
  for (let i = 0; i < text.length; i++) {
    text[i] = text[i].split('=');
    output[text[i][0]] = text[i][1];
  }
  return output;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);