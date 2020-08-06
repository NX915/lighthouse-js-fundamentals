arr = [1,2,3,4];
for (let i=0; i < 5; i++) {
for (let element of arr) {
  if (element == 3) {
    break;
  }
  console.log(element);
}
}