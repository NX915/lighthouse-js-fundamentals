const repeatNumbers = function(data) {
  // Put your solution here
  let txt = '';
  data.forEach ((element, index) => {
    for (let i = 0; i < element[1]; i++) {
      txt += element[0];
    }
    if (index < data.length - 1) {
      txt += ', ';
    }
  });
  return txt;
}; 
/* result of not reading the instructions well
const repeatNumbers = function(data) {
  // Put your solution here
  data.forEach ((element, index, arr) => {
    let temp = '';
    for (let i = 0; i < element[1]; i++) {
      temp += element[0];
    }
    arr[index] = parseInt(temp);
  });
  return data;
}; */

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));