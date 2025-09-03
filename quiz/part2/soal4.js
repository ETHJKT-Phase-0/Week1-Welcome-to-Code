// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);

let firstWordLength = exampleFirstWord4.length;

// exampleFirstWord tidak ada karena variabel yang benar adalah exampleFirstWord4
console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);

// KATA KEDUA
let SecondWord = word4.substring(4, 14);

console.log('Second Word: ' + SecondWord + ', with length: ' + SecondWord.length);

// KATA KETIGA
let ThirdWord = word4.substring(15, 17);

console.log('Third Word: ' + ThirdWord + ', with length: ' + ThirdWord.length);

// KATA KEEMPAT
let FourthWord = word4.substring(18, 20);

console.log('Fourth Word: ' + FourthWord + ', with length: ' + FourthWord.length);

// KATA KELIMA
let FifthWord = word4.substring(21, 25);

console.log('Fifth Word: ' + FifthWord + ', with length: ' + FifthWord.length);