// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);

let firstWordLength = exampleFirstWord4.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);

// Code disini
let kataKedua = word4.substring(4, 14)
let kataKetiga = word4.substring(15, 17)
let kataKeempat = word4.substring(18, 20)
let kataKelima = word4.substring(21, 25)
console.log('Kata Kedua: ' + kataKedua + ', with length: ' + kataKedua.length);
console.log('Kata Ketiga: ' + kataKetiga + ', with length: ' + kataKetiga.length);
console.log('Kata Keempat: ' + kataKeempat + ', with length: ' + kataKeempat.length);
console.log('Kata Kelima: ' + kataKelima + ', with length: ' + kataKelima.length);