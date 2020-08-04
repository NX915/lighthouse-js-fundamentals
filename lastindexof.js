function lastIndexOf (numArr, num) {
  let count = -1;
  numArr.forEach((element, index) => {
    if (element === num) {
      count = index;
    }
  });
  return count;
}
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1));