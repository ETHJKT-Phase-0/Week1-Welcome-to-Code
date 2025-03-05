// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);

let firstWordLength = exampleFirstWord4.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);


let secondWord4 = word4.substring(4, 14);
let secLength = secondWord4.length;
console.log('Second Word: ' + secondWord4, ', with length: ', secLength);

let thirdWord4 = word4.substring(15, 17)
let thirdLength = thirdWord4.length;
console.log('Third word: ', thirdWord4, ', with lenngth: ', thirdLength);

let fourthWord4 = word4.substring(18, 20)
let fourthLength = fourthWord4.length;
console.log('Fourth word: ', fourthWord4, ', with length: ', fourthLength);

let lastWord4 = word4.substring(21, 26)
let lastLength = lastWord4.length;
console.log('Last word: ', lastWord4, ', with length: ', lastLength);