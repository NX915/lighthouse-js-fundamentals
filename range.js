function range (start, end, step) {
  let arr = [];
  if (start <= end && step > 0){
    for (let i = 0; i <= end - start; i += step) {
      arr.push(start + i);
    }
  }
  return arr;
}


console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));