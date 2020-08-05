const checkAir = function (samples, threshold) {
  // Code here!
  let clean = 0, dirty = 0;
  for (let element of samples) {
    switch (element) {
    case 'clean':
      clean++;
      break;
    case 'dirty':
      dirty++;
    }
  }
  if (dirty / clean > threshold) {
    return 'Polluted';
  } else {
    return 'Clean';
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))