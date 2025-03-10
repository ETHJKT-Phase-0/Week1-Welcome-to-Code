// ## Soal 4
// ```js
//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
    let jumlahX = 0;
    let jumlahO = 0;

    for( i = 0; i < str.length; i++) {
        if (str[i] === 'x' ) {
            jumlahX++;
        } else if (str[i] === 'o' ) {
            jumlahO++;
        }
    } return jumlahO === jumlahX;
}
  
// TEST CASES
console.log(xo('xoxoxooxoxoxxoo'));
console.log(xo('oxooxooxoxox'));
console.log(xo('oxoxoxoxoxoxoxooo'));
console.log(xo('xxxooooxxxxooooo'));
console.log(xo('xoxoxoxoxoxooxxo'));
console.log(xo('xoxooxxxoxoxoxoo'));
console.log(xo('xoxooxxooxoxxxxxxooo'));
console.log(xo('xoxooxxoooxx'));
console.log(xo('xoxooxxoooxxo'));
console.log(xo('xoxooxxxxooooxxo'));
console.log(xo('xoxoxoxoxooxxo'));
console.log(xo('xoxooxxoooxxxxx'));
console.log(xo('xoxooxxxooxxo'));

// ```

//horeee selesai 😋