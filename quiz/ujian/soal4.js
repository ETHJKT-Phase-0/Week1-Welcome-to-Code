// ## Soal 4
// js
//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string.
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
  // you can only write your code here!
  let arr = str.split("");
  let xCount = 0,
    oCount = 0;
  arr.forEach((letter) => {
    if (letter.toLowerCase() === "x") {
      xCount++;
    } else if (letter.toLowerCase() === "o") {
      oCount++;
    }
  });

  return xCount == oCount;
}

// TEST CASES
console.log(xo("xoxoxo")); // true
console.log(xo("oxooxo")); // false
console.log(xo("oxo")); // false
console.log(xo("xxxooo")); // true
console.log(xo("xoxooxxo")); // true
