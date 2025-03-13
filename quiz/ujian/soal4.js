//Soal 4
// Problem
// Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
// Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.
// contoh : console.log(xo('xoxoxo')); // true
//console.log(xo('oxooxo')); // false

function xo(str) {
    let jumlahX = 0;
    let jumlahO = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'x') {
            jumlahX ++;
        } else if (str[i] === 'o') {
            jumlahO ++;
        }
    }
    
    if (jumlahX === jumlahO) {
        return true;
    } else {
        return false;
    }
}

console.log(xo("xoxo"));
console.log(xo("xoxox"));
console.log(xo("xxxx"));