function loopyLighthouse (range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    let txt = '';
    if (i % multiples[0] === 0) {
      txt += words[0];
    }
    if (i % multiples[1] === 0) {
      txt += words[1];
    }
    if (txt === '') {
      txt = i;
    }
    console.log(txt);
  }
}
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);