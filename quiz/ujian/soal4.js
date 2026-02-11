//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
  let count_x = 0;
  let count_o = 0;
  for(let i = 0; i < str.length; i++){
    switch(str[i]){
      case 'x':
        count_x++;
        break;
      case 'o':
        count_o++;
    }
  }

  return count_o === count_x ? true : false;
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true