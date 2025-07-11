// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!
let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);
let secondWord = word4.substring(4, 14);
let thirdWord = word4.substring(15, 17);
let fourthWord = word4.substring(18, 20);
let fifthWord = word4.substring(21, 25);

let firstWordLength = exampleFirstWord4.length;
let secondWordLength = secondWord.length;(4, 14);
let thirdWordLength = thirdWord.length;(15, 17);
let fourthWordLength = fourthWord.length;(18, 20);
let fifthWordLength = fifthWord.length;(21, 25);

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord + ', with length: ' + fifthWordLength);