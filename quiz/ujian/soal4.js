//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
    // you can only write your code here!
    let a = str
    let b = 0
    let c = 0
    let d, e
    for(let i = 0; i < a.length; i++) {
        if("o".includes(a[i])) {
            d = b++;
        }
        if("x".includes(a[i])) {
            e = c++;
        }
    }
    if (d == e) {
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