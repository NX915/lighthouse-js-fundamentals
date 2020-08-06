const multiplicationTable = function(maxValue) {
  // Your code here
  let txt = '';
  for (let i = 0; i < maxValue; i++) {
    for (let j = 0; j < maxValue; j++) {
      txt += ((i + 1) * (j + 1)) + ' ';
    }
    txt += '\n';
  }
  return txt;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));