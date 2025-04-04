//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
    // you can only write your code here!
    let i = 0;
    let x = 0, o = 0;

    while (str[i] !== undefined) {
        if(str[i] === "x") {
            x++
        }else if(str[i] === "o"){
            o++
        }
        i++
    }

    if(x === o) {
        return true
    }else{
        return false
    }

}
  
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true