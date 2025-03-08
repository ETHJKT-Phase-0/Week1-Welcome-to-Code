// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);
let secondword4 = word4.substring(4, 14);
let thirdword4 = word4.substring(15, 17);
let fourthword4 = word4.substring(18, 20);
let fifthword4 = word4.substring(21, 25);


let firstWordLength = exampleFirstWord4.length;
let secondwordLenght = secondword4.length;
let thirdwordLenght = thirdword4.length;
let fourthwordLenght = fourthword4.length;
let fifthwordLenght = fifthword4.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondword4 + ', with length: ' + secondwordLenght);
console.log('Third Word: ' + thirdword4 + ', with length: ' + thirdwordLenght);
console.log('Fourth Word: ' + fourthword4 + ', with length: ' + fourthwordLenght);
console.log('Fifth Word: ' + fifthword4 + ', with length: ' + fifthwordLenght);