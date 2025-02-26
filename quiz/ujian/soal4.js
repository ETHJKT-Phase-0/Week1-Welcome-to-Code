//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
    // you can only write your code here!
let cuontX = 0;
let cuontO = 0;
    for (let a = 0; a < str.length; a++) {
        if (str[a] === 'x') {
            cuontX++;
        }
        else if (str[a] === 'o') {
            cuontO++;
        }
    }

   if (cuontX === cuontO) {
    return true;
    } else {
    return false;
        
    }
}
  
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
