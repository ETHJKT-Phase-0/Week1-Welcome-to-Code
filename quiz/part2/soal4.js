// ## Soal 4. Breaking Sentence (yet Again) and Count Each Length
// ```js
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word = 'wow JavaScript is so cool';
let exampleFirstWord = word.substring(0, 3);
let exampleSecondWord = word.substring(4, 14);
let exampleThirdWord = word.substring(15, 17);
let exampleFourthWord = word.substring(18, 20);
let exampleFifthWord = word.substring(21, 25);

let firstWordLength = exampleFirstWord.length;
let SecondWordLength = exampleSecondWord.length;
let ThirdWordLength = exampleThirdWord.length;
let FourthWordLength = exampleFourthWord.length;
let FifthWordLength = exampleFifthWord.length;

console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);
console.log('Second Word: ' + exampleSecondWord + ', with length: ' + SecondWordLength);
console.log('Third Word: ' + exampleThirdWord + ', with length: ' + ThirdWordLength);
console.log('Fourth Word: ' + exampleFourthWord + ', with length: ' + FourthWordLength);
console.log('Fifth Word: ' + exampleFifthWord + ', with length: ' + FifthWordLength);