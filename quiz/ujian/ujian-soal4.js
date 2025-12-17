// Soal 4
function xo(str) {
    let x = str.split('x').length - 1;
    let o = str.split('o').length - 1;
    if (x === o) {
        return true;
    } else {
        return false;
    }
}

console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true