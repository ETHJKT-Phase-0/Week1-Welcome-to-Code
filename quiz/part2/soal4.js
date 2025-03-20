// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word = 'wow JavaScript is so cool';
let firstWord = word.substring(0, 3);
let secWord = word.substring(4, 14);
let thirdWord = word.substring(15, 17);
let fourthWord = word.substring(18, 20);
let fifthWord = word.substring(21, 26);

let firstLength = firstWord.length;
let secLength = secWord.length;
let thirdtLength = thirdWord.length;
let fourthLength = fourthWord.length;
let fifthLength = fifthWord.length;

console.log('First Word: ' + firstWord + ', with length: ' + firstLength);
console.log('Second Word: ' + secWord + ', with length: ' + secLength);
console.log('Third Word: ' + thirdWord + ', with length: ' + thirdtLength);
console.log('Fourth Word: ' + fourthWord + ', with length: ' + fourthLength);
console.log('Fifth Word: ' + fifthWord + ', with length: ' + fifthLength);