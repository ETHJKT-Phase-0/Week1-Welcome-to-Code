function xo (str){
    let countX = 0;
    let countO = 0;

    for (let char of str) {
        if (char === 'x'){
            countX++;
        }else if (char === 'o') {
            countO++;
        }
    }

    return countX === countO;
}

console.log(xo("xoxoxo"));    
console.log(xo("oxooxo"));    
console.log(xo("oxo"));       
console.log(xo("xxxooo"));    
console.log(xo("xoxooxxo")); 