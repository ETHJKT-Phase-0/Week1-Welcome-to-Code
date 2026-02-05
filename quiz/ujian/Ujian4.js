//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
    // you can only write your code here!
    let jumlahX = 0;
    let jumlahO = 0;
    for(let i = 0; i<str.length; i++){
        if(str[i] === "x" ){
            jumlahX++;
        }else if(str[i] === "o"){
            jumlahO++;
        }
    }     
    if(jumlahX == jumlahO){
        return true;
    }else if(jumlahX != jumlahO){
        return false;
    }
    // return jumlahX === jumlahO;
    
    
}
  
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true