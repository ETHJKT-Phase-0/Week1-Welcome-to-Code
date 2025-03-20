function xo(str) {
  // you can only write your code here!
  let xCount = 0
  let oCount = 0

  for (const alp of str) {
    alp === "o" ? oCount++ : xCount++;
  }

  return xCount === oCount ? true : false;
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
