// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word = 'wow JavaScript is so cool';

let exampleFirstWord = word.substring(0, 3);
let towWord = word.substring(4, 14);
let rhWord = word.substring(15, 17);
let forWord = word.substring(18, 20);
let fivWord = word.substring(21, 25);

let firstWordLength = exampleFirstWord.length;
let towWordLength = towWord.length;
let rhWordLength = rhWord.length;
let forWordLength = forWord.length;
let fivWordLength = fivWord.length;

{console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);
console.log('First Word: ' + towWord + ', with length: ' + towWordLength);
console.log('First Word: ' + rhWord + ', with length: ' + rhWordLength);
console.log('First Word: ' + forWord + ', with length: ' + forWordLength);
console.log('First Word: ' + fivWord + ', with length: ' + fivWordLength);
}