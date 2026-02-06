// ## Soal 4

//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
    // you can only write your code here!


    // // console.log(str[str.length - 1]);

    // if(str[0].toLowerCase() == "x" && str[str.length -1].toLowerCase() == "o"){
    //     return true;
    // } else {
    //     return false;
    // }
    // // console.log(arrays);
    // efek ga baca soal


    // answer : 
    let arraysX = [];
    let arraysO = [];

    for (let i = 0; i < str.length; i++){
        if(str[i] === 'x'){
            arraysX.push(str[i])
        }

        if(str[i] === 'o'){
            arraysO.push(str[i])
        }
        
    }

    if (arraysX.length === arraysO.length) {
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
