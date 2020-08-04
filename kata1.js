const sumLargestNumbers = function(data) {
  // Put your solution here
  let large1 = 0, large2 = 0;
  for (let element of data) {
    if (element > large1 || element > large2) {
      if (element > large1) {
        large2 = large1;
        large1 = element;
      } else {
        large2 = element;
      }
    }
  }
  return large1 + large2;
};

console.log(sumLargestNumbers([1, 10]));//expect 11
console.log(sumLargestNumbers([1, 2, 3]));//expect 5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));//expect 126