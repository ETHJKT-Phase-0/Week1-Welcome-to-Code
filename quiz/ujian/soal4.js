function xo(str) {
    let banyakX = 0, banyakO = 0;
    
    for(i = 0; i < str.length; i++){
        if (str[i] === `x`){
            banyakX++;
        } else if (str[i] === `o`){
            banyakO++;
        }
    }

    if (banyakX === banyakO)
        return true;
    else
        return false;
}
  
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true