function xo(str) {
    let jumlahx = 0;
    let jumlaho = 0;
    for (let char of str) {
        if (char == 'x') {
            jumlahx++;
        } else if (char == 'o') {
            jumlaho++;
        }
    }
    return jumlahx == jumlaho;
}

console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true