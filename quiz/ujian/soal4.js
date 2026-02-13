function xo(str) {
    let x= 0, o = 0
    for(let i = 0; i < str.length; i++){
        str[i] === 'x' ? x++ : o++
    }
    return x === o
}
  

console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true