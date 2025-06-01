// Soal 1   
// Problem
// Diberikan sebuah function bandingkanAngka(angka1, angka2) yang menerima dua parameter angka. 
// Function akan me-return nilai true jika angka2 lebih besar dari angka1, dan false jika sebaliknya. 
// Jika kedua angka bernilai sama, function akan me-return -1.

console.log(`\nSoal 1`)
function bandingkanAngka(angka1, angka2) {
  if (angka1 > angka2) {
    return true;
  } else if (angka2 > angka1) {
    return false;
  } else {
    return -1;
  }
}

console.log (bandingkanAngka(7, 8))

// Soal 2
// Problem
// Diberikan sebuah function balikKata(kata) yang menerima satu parameter berupa string. 
// Function akan me-return kata yang dibalik. Contoh, jika kata adalah "John Doe", function akan me-return "eoD nhoJ".

console.log(`\nSoal 2`)
function balikKata(kata) {
let balikKata = "";
for (let i = kata.length - 1; i >= 0; i--) {
    balikKata += kata[i];
}
return balikKata;
}
console.log(balikKata(`dzulfiqar hanif`))

// Soal 3
// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu 
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. 
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

console.log(`\nSoal 3`)
function konversiMenit(menits) {
   let menit = Math.floor(menits / 60)
   let sisadetik = (menits % 60)
   return `${menit}:${sisadetik}`
}
 console.log(konversiMenit(78))

//   Soal 4
//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.


console.log(`\nSoal 4`)
function xo(str) {
let countX = 0; 
let countO = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === `x`) {
        countX++;
    } else if (str[i] === `o`) {
        countO++;
    } 
}
return countX === countO;
}
console.log(xo(`xoxo`)) 