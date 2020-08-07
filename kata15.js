const squareCode = function(message) {
  // Put your solution here
  let num, arr = [], txt = '';
  while (message.indexOf(' ') !== -1) {
    message = message.replace(' ', '');
  }
  num = Math.ceil(Math.sqrt(message.length));
  for (let i = 0; i < Math.floor(Math.sqrt(message.length)); i++) {
    if (i === num - 2) {
      arr.push(message.slice(i * num, message.length));
    } else {
      arr.push(message.slice(i * num, i * num + num));
    }
  }
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (typeof arr[j][i] === 'string'){
        txt += arr[j][i];
      }
    }
    txt = txt + ' ';
  }
  // console.log(arr);
  return txt;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));