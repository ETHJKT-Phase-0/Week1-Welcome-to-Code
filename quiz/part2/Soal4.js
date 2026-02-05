// Soal 4
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord = word4.substring(0, 3);
let secondWord = word4.substring(4, 14);
let thirWord = word4.substring(15, 17);
let fourthWord = word4.substring(18, 20);
let fifthWord = word4.substring(21, 25);

let firstWordLength = exampleFirstWord.length;
let secondWordLength = secondWord.length;
let thirdWordLength = thirWord.length;
let fourthWordLength = fourthWord.length;
let fifthWordLength = fifthWord.length ;

console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord + ', with length: ' + secondWordLength);
console.log('third Word: ' + thirWord + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord + ', with length: ' + fifthWordLength);