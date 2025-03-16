// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord = word4.substring(0, 3);

let firstWordLength = exampleFirstWord.length;

console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);


let secondword4 = word4.substring(4,14);
let thirdword4 = word4.substring(15,17);
let fourthword4 = word4.substring(18,20);
let fifthword4 = word4.substring(21,25);

let secondWord4Length = secondword4.length;
let thirdWord4Length = thirdword4.length;
let fourthWord4Length = fourthword4.length;
let fifthWord4Length = fifthword4.length;

console.log('Second Word: ' + secondword4 + ', with length: ' + secondWord4Length);
console.log('Third Word: ' + thirdword4 + ', with length: ' + thirdWord4Length);
console.log('Fourth Word: ' + fourthword4 + ', with length: ' + fourthWord4Length);
console.log('Fifth Word: ' + fifthword4 + ', with length: ' + fifthWord4Length);

