
const makeCase = function(input, cases) {
  // Put your solution here
  let txt = [];
  input.trim();
  if (typeof cases === 'string') {
    cases = [cases];
  }
  for (let i = 0; i < cases.length; i++) {
    txt = [];
    switch (cases[i]) {
    case 'camel':
    case 'pascal':
    case 'title':
      for (let j = 0, match = false; j < input.length; j++) {
        if (input[j] !== ' ') {
          if (match) {
            txt.push(input[j].toUpperCase());
            match = false;
          } else {
            txt.push(input[j]);
          }
        } else {
          match = true;
          if (cases[i] === 'title') {
            txt.push(input[j]);
          }
        }
      }
      if (cases[i] === 'pascal' || cases[i] === 'title') {
        txt[0] = txt[0].toUpperCase();
      }
      input = txt.join('');
      break;
    case 'snake':
    case 'kebab':
      for (let j = 0; j < input.length; j++) {
        if (input[j] !== ' ') {
          txt.push(input[j]);
        } else {
          if (cases[i] === 'snake') {
            txt.push('_');
          } else {
            txt.push('-');
          }
        }
      }
      input = txt.join('');
      break;
    }
  }

  for (let i = 0; i < cases.length; i++) {
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    txt = [];
    switch (cases[i]) {
    case 'vowel':
      for (let j = 0; j < input.length; j++) {
        if (vowel.indexOf(input[j]) === -1) {
          txt.push(input[j]);
        } else {
          txt.push(input[j].toUpperCase());
        }
      }
      input = txt.join('');
      break;
    case 'consonant':
      for (let j = 0; j < input.length; j++) {
        if (vowel.indexOf(input[j]) !== -1) {
          txt.push(input[j]);
        } else {
          txt.push(input[j].toUpperCase());
        }
      }
      input = txt.join('');
    }
  }

  for (let i = 0; i < cases.length; i++) {
    txt = [];
    switch (cases[i]) {
    case 'upper':
      txt = input.toUpperCase().split('');
      input = txt.join('');
      break;
    case 'lower':
      txt = input.toLowerCase().split('');
      input = txt.join('');
    }
  }
  return input;
}
let time1 = Date.now();
console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
console.log(Date.now() - time1);