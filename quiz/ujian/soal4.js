//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

/*
    1. buat dua variabel untuk menyimpan nilai x dan o
    2. buat loop for of untuk memecahnya menjadi pecahan str
    3. buat pengkondisian untuk menentukan jumlah dari x dan o
    4. bandingkan stringx dan stringo   
*/

function xo(str) {
    let stringX = 0;
    let stringO = 0;

    for(let char of str){
        if(char === "x"){
            stringX++;
        } else if (char === "o"){
            stringO++;
        }
    }

    return stringX === stringO;
}
  
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true