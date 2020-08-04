function concat (arr1, arr2) {
  for (let element of arr2) {
    arr1.push(element);
  }
  return arr1;
}
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]));