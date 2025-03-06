//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, 
//   dan false jika tidak.

function xo(str) {
    const xCount = str.toLowerCase().split('x').length - 1;
    const oCount = str.toLowerCase().split('o').length - 1;

    return xCount === oCount;
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true

// SOAL SELESAI