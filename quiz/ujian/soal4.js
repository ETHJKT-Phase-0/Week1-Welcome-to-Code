//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
    // you can only write your code here!
    let o = "";
    let x = "";

    for (i = 0; i < str.length; i++) {
        if (str[i] == "o") {
            o = o + str[i]
        } else if (str[i] == "x") {
            x = x + str[i]
        }
        
    }
    return o.length == x.length
}
  
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true