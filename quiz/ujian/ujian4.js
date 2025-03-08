// ## Soal 4
// ```js
//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string.
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

// let kata = "Indonesia";

// // Menghitung jumlah vokal
// let jumlahVokal = 0;
// for(let i = 0; i < kata.length; i++) {
//     if("aiueoAIUEO".includes(kata[i])) {
//         jumlahVokal++;
//     }
// }
// console.log(`Jumlah vokal: ${jumlahVokal}`);  // 5

function xo(str) {
  let x = 0;
  let o = 0;
  
  for(let char of str.toLowerCase()){
    if (char === "x"){
      x++;
    } else if (char === "o"){
      o++
    }
  }

  return x === o;
  
}

// TEST CASES
console.log(xo("xoxoxo")); // true
console.log(xo("oxooxo")); // false
console.log(xo("oxo")); // false
console.log(xo("xxxooo")); // true
console.log(xo("xoxooxxo")); // true


