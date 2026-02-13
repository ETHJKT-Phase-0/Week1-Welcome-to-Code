// Soal 4. Breaking Sentence (yet Again) and Count Each Length

// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);
let secondWord = word4.substring(4, 14);
let thirdWord = word4.substring(15, 17);
let fourthWord = word4.substring(18, 20);
let lastWord = word4.substring(21, 25);

let firstWordLength = exampleFirstWord4.length;
let secondWordLength = secondWord.length;
let thirdWordLength = thirdWord.length;
let fourthWordLength = fourthWord.length;
let lastWordLength = lastWord.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord + ', with length: ' + fourthWordLength);
console.log('Last Word: ' + lastWord + ', with length: ' + lastWordLength);