// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);
let SecondWord = word4.substring(4,14);
let ThirdWord = word4.substring(15,17);
let FourthWord = word4.substring(18,20);
let FifthWord = word4.substring(21,25);

let firstWordLength = exampleFirstWord4.length;
let secondLength = SecondWord.length;
let thirdLength = ThirdWord.length;
let fourthLength = FourthWord.length;
let fifthLength = FifthWord.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + SecondWord + ', with length: ' + secondLength);
console.log('Third Word: ' + ThirdWord + ', with length: ' + thirdLength);
console.log('Fourth Word: ' + FourthWord + ', with length: ' + fourthLength);
console.log('Fifth Word: ' + FifthWord + ', with length: ' + fifthLength);
