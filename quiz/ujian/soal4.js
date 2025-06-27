function xo(str){
    let oHuruf = 0
    let xHuruf = 0

    for(let i = 0; i <= str.length; i++){
        if(str[i] === 'x') xHuruf++;
        if(str[i] === 'o') oHuruf++;
    }
    return oHuruf === xHuruf;
}

console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
