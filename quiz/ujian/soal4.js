//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
    // you can only write your code here!
    hitungO = 0;
    hitungX = 0;
    for (let huruf of str) {
        if(huruf === "o" || huruf === "O"){
            hitungO++;
        }
        if(huruf === "x" || huruf === "X"){
            hitungX++;
        }
    }
    return hitungO === hitungX;
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true

console.log(xo('XoxOxO')); //true