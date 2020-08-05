const urlEncode = function(text) {
  // Put your solution here
  let encodeText = '';
  text = text.trim();
  for (let element of text) {
    if (element === ' ') {
      encodeText += '%20';
    } else {
      encodeText += element;
    }
  }
  return encodeText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));