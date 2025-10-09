//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
    // you can only write your code here!
    let panjangStr = str.length - 1;
    let jumlahKarakterX = 0;
    let jumlahKarakterO = 0;
    
    for(let i=0; i <= panjangStr; i++){
        if(str[i] === 'x' || str[i] === 'X'){
            jumlahKarakterX += 1;
        } else if(str[i] === 'o' || str[i] === 'O'){
            jumlahKarakterO += 1;
        }
    }

    if(jumlahKarakterX === jumlahKarakterO){
        return true;
    } else {
        return false;
    }
}
  
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
console.log(xo('Xo')); // true