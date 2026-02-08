function xo(str) {
    let panjangKarakter = str.length
    let xAmount = 0, oAmount = 0
    for (let i = 0; i < panjangKarakter; i++) {
        if (str[i] === 'x') {
            xAmount++
        } else if (str[i] === 'o') {
            oAmount++
        }
    }
    if (xAmount === oAmount) {
        return true
    } else {
        return false
    }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true