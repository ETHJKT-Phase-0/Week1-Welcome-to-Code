//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {                              // fungsi yang menyimpan parameter string
    // you can only write your code here!
    let charX = 0;                              // variable untuk menyimpan jumlah awal karakter X
    let charO = 0;                              // variable untuk menyimpan jumlah awal karakter O

    for (let i = 0; i < str.length; i++) {       // looping yang akan menghitung setiap karakter pada string
        if (str[i] === 'x') {                   // memeriksa jika karakter pada string adalah X
            charX++;                            // maka value atau jumlah dari karakter X akan ditambahkan
        } else if (str[i] === 'o') {            // memeriksa jika karakter pada string adalah O
            charO++;                            // maka value atau jumlah dari karakter O akan ditambahkan
        }
    }
    return charX === charO;                     // memberikan hasil perbandingan value atau jumlah karakter X dan O
}
  
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true