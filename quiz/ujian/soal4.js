//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string.
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
  // you can only write your code here!
  let string = str.toLowerCase();
  let idX = [];
  let idO = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] == "x") {
      idX.push(string[i]);
    } else {
      idO.push(string[i]);
    }
  }
  if (idX.length === idO.length) {
    return true;
  } else {
    return false;
  }
}

// TEST CASES
console.log(xo("xoxoxo")); // true
console.log(xo("oxooxo")); // false
console.log(xo("oxo")); // false
console.log(xo("xxxooo")); // true
console.log(xo("xoxooxxo")); // true
