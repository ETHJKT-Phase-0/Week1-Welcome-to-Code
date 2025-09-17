//Soal 4

//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
    // you can only write your code here!
    let hitungX = 0;
    let hitungO = 0;

    for (i = 0; i < str.length; i++){
        if (str[i] === "x"){
            hitungX = hitungX + 1;
        } else if (str[i] === "o"){
            hitungO = hitungO +1;
        }
    }
    return hitungX === hitungO;
}
  
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true