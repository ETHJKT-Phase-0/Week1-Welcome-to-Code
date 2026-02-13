function xo(str) {
    let countX = 0;
    let countO = 0;

    for(let i = 0; i < str.length; i++){ //untuk menghitung setiap karakter
        if(str[i] === 'x'){ //menghitung x
            countX++;
        } else if(str[i] === 'o'){ //menghitung o
            countO++;
        }    
    }
    return countX === countO //membandingkan hasil function
}
  
console.log(xo('xoxoxo')); 
console.log(xo('oxooxo')); 
console.log(xo('oxo')); 
console.log(xo('xxxooo')); 
console.log(xo('xoxooxxo')); 
