

function xo(str) {
    let x = '';
    let o = '';

    for (let a = 0; a <= str.length; a++) {
        if (str[a] === 'x') {
            x++
        } else if (str[a] === 'o') {
            o++ 
        }
    }
    return x === o
}

console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true