// Soal 4

//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
    // you can only write your code here!
    let totalX = '';
    let totalO = '';
    for (let i = 0; i < str.length; i++) {

        if (str[i] === 'x') {
            totalX += str[i];
        } else {
            totalO += str[i];
        }
    }
    if (totalO.length === totalX.length) {
        return true;
    } else {
        return false;
    }
}
// TEST CASES
console.log(xo('xo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true