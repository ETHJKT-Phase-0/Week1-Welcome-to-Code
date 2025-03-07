function xo(str) {
    // you can only write your code here!
    let result = 0;
    for ( let letter of str){
        if (letter === "x"){
            result += 1;
        }

        if (letter === "o"){
            result -= 1;
        }
    }

    return !result;
}
  
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true