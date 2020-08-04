const conditionalSum = function(values, condition) {
  // Your code here
  let sum = 0;
  for (let element of values) {
    switch (condition) {
    case 'even':
      if (element % 2 === 0) {
        sum += element;
      }
      break;
    case 'odd':
      if (element % 2 !== 0) {
        sum += element;
      }
      break;
    }
  }
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));//expect 6
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));//expect 9
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));//expect 144
console.log(conditionalSum([], "odd"));//expect 0