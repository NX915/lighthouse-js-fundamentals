let prompt = require("prompt-sync")();

// code below (replace this example)
let num = Math.ceil(Math.random() * 100);
let tries = 1;
const triesArr = [];
while (true) {
  let answer = prompt("Guess a number: ");
  if (parseInt(answer) === num) {
    console.log('You got it! You took ' + tries + ' attempts!');
    break;
  } else if (parseInt(answer) > num) {
    console.log('Too High!');
    if (triesArr.indexOf(answer) === -1) {
      tries++;
      triesArr.push(answer);
    }
  } else if (parseInt(answer) < num) {
    console.log('Too Low!');  
    if (triesArr.indexOf(answer) === -1) {
      tries++;
      triesArr.push(answer);
    }
  } else if (answer === 'exit') {
    break;
  } else {
    console.log('Not a Number!');
  }
}