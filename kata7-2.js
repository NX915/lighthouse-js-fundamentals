const camelCase = function(input) {
  // Your code here
  let txt = '', behindSpace = false;
  for (element of input) {
    if (behindSpace) {
      txt += element.toUpperCase();
      behindSpace = false;
    } else {
      switch (element) {
      case ' ':
        behindSpace = true;
        break;
      default:
        txt += element;
      }
    }
  }
  return txt;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));