const calculateChange = function(total, cash) {
  // Your code here
  const money = {
    twentyDollar: 2000,
    tenDollar: 1000,
    fiveDollar: 500,
    twoDollar: 200,
    oneDollar: 100,
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1,
  };
  const change = {};
  let diff = cash - total;
  for (const value in money) {
    if (diff > money[value]) {
      change[value] = Math.floor(diff / money[value]);
      diff = diff % money[value];
      //console.log(value, money[value], diff);
    }
  }
  return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
console.log(calculateChange(600, 1000));