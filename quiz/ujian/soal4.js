//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string.
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
  // you can only write your code here!
  let X = str.split("");

  let x = "";
  let o = "";
  for (let i = 0; i < X.length; i++) {
    if (X[i] === "x") {
      x += "x";
    } else {
      o += "o";
    }
  }
  let hasil = x.length === o.length ? "true" : "false";
  return hasil;
}

// TEST CASES
console.log(xo("xoxoxo")); // true
console.log(xo("oxooxo")); // false
console.log(xo("oxo")); // false
console.log(xo("xxxooo")); // true
console.log(xo("xoxooxxo")); // true