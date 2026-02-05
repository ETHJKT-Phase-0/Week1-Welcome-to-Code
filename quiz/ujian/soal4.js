//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
    for (let i =0; i< str.length; i++){
        if (str[i] === 'x' && str[i + 4] === 'o'){
            return true;
        } else if(str[i] ==='o' && str[i + 4] ==='x'){
            return true;
        }
    }
    return false;
    // you can only write your code here!
}
  
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true