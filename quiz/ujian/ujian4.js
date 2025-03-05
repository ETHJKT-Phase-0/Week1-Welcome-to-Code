//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
    // you can only write your code here!
    let x = 0;
    let o = 0;
    for(let i = 0; i < str.length;i++){
     // console.log(i)
      if(str[i] === 'x'){
        x++
       // console.log(x +'x')
      }else if(str[i] === 'o'){
        o++
        //console.log(o+'o')
      }
    }
  return x === o
    
}
  
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true