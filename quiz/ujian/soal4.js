//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
    // you can only write your code here!
    let hitungx = 0;
    let hitungo = 0;

    for(let char of str){
        if(char == 'x'){
            hitungx++;
        }
        else if (char == 'o'){
            hitungo++;
        }
    }
    return hitungx == hitungo;
}
  
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true