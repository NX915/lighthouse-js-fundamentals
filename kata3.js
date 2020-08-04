const numberOfVowels = function(data) {
  // Put your solution here
  let sum = 0;
  for (element of data) {
    switch (element) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      sum++;
    }
  }
  return sum;
};

console.log(numberOfVowels("orange"));//expect 3
console.log(numberOfVowels("lighthouse labs"));//expect 5
console.log(numberOfVowels("aeiou"));//expect 5