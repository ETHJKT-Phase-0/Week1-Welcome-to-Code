function xo(str) {
    x_o = str.split('');
    x = 0;
    o = 0;
    for (let i = 0; i < x_o.length; i++) {
        if (x_o[i] === 'x') x++;
        if (x_o[i] === 'o') o++;
    }
    return x === o;
}
  
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true