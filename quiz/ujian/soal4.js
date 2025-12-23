//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
    // you can only write your code here!
    let jumlah_x = 0;
    let jumlah_o = 0;
    for (i=0;i <= str.length - 1; i++) {
        if("x".includes(str[i])) {
            jumlah_x++;
        } else if("o".includes(str[i])) {
            jumlah_o++;
        }
    }
    let hasil;
    if (jumlah_o == jumlah_x) {
         hasil = true;
    } else {
        hasil = false;
    }
    return hasil;
}
  
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
