//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string.
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

// function xo(str) {
//   let jumlahO = 0;
//   let jumlahX = 0;
//   for (let a = 0; a < str.length; a++) {
//     if ('o'.includes(str[a])) {
//       jumlahO++;
//     }
//   }
//   for (let b = 0; b < str.length; b++) {
//     if ('x'.includes(str[b])) {
//       jumlahX++;
//     }
//   }
//   if (jumlahO == jumlahX) {
//     return true
//   } else if (jumlahO != jumlahX) {
//     return false
//   }
// }

function xo (str) {
  let jumlahO = 0
  let jumlahX = 0
  for (let i = 0; i < str.length; ++i) {
    if (str[i] === 'o') {
      jumlahO++
    }
    if (str[i] === 'x') {
      jumlahX++
    }
  }
  if (jumlahO == jumlahX) {
    return true
  } else if (jumlahO != jumlahX) {
    return false
  }
}

// TEST CASES
console.log(xo("xoxoxo")); // true
console.log(xo("oxooxo")); // false
console.log(xo("oxo")); // false
console.log(xo("xxxooo")); // true
console.log(xo("xoxooxxo")); // true
