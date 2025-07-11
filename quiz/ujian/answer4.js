// ## Soal 4
// ```js
// //   Problem
// //   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
// //   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

// function xo(str) {
//     // you can only write your code here!
// }
  
// // TEST CASES
// console.log(xo('xoxoxo')); // true
// console.log(xo('oxooxo')); // false
// console.log(xo('oxo')); // false
// console.log(xo('xxxooo')); // true
// console.log(xo('xoxooxxo')); // true
// ```


// function xo(str) {
//   let jumlahX = 0;
//   let jumlahO = 0;

//   // Ubah ke huruf kecil agar case-insensitive
//   str = str.toLowerCase();

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === 'x') {
//       jumlahX++;
//     } else if (str[i] === 'o') {
//       jumlahO++;
//     }
//   }

//   return jumlahX === jumlahO;
// }
// console.log(xo("xoxo"));     // true
// console.log(xo("xoxoxo"));   // false
// console.log(xo("xooxxoo"));  // true
// console.log(xo("xxxooo"));   // true
// console.log(xo("xXOo"));     // true (karena case-insensitive)

function xo (str){
    let jumlahX= 0;
    let jumlahO= 0;

    str = str.toLowerCase();
        for(let i = 0; i < str.length; i ++){
            if(str[i] === "x"){
                jumlahX++
            }else if(str[i] === "o"){
                jumlahO++
            }
        }return jumlahX === jumlahO;
}console.log(xo("xoxoxo"))//true

console.log(xo("xoxoxoxxx"))//False
console.log(xo("xoxoxoxoxoxoxoxoxoxoXO"))//true
console.log(xo("xoxoffxoX"))//false