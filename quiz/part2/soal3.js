// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word = 'wow JavaScript is so cool';
let firstWord = word.substring(0, 3);
let secWord = word.substring(4, 14);
let thirdWord = word.substring(15, 17);
let fourthWord = word.substring(18, 20);
let fifthWord = word.substring(21, 26);

console.log('First Word: ' + firstWord);
console.log('Second Word: ' + secWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);