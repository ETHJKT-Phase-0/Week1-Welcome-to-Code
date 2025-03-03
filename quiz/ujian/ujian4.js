 
 function xo(str) {
    let x = 0;
    let o = 0;
    
    // Loop akan terus berjalan selama nilai i kurang dari panjang string 
    // Jika str[i] sama dengan 'x', maka nilai x akan bertambah 1
    // Jika str[i] sama dengan 'o', maka nilai o akan bertambah 1
    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'x') {
            x++;
        } else if (str[i] === 'o') {
            o++;
        }
    }
    return x === o;
}

console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true