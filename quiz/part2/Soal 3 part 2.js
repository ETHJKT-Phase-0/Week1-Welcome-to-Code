// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);
let wordJavaScript = word4.substring(4, 14);

let firstWordLength = exampleFirstWord4.length;
let secondWordLength = wordJavaScript.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: '+ wordJavaScript + ", with lenth: " + secondWordLength); 