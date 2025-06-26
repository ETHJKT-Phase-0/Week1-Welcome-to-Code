// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);

let firstWordLength = exampleFirstWord4.length;
let secWord = word4.substring(4,14)
let thiWo = word4.substring(15,17)
let foWo = word4.substring(18,20)
let fiWo = word4.substring (21,25)
let w2leng = secWord.length;
let w3leng = thiWo.length;
let w4leng = foWo.length;
let w5leng = fiWo.length;


console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log("Second Word: "+ secWord + ', with length: ' + w2leng);
console.log("Third Word: "+ thiWo+ ', with length: ' + w3leng)
console.log("Fourth Word: "+ foWo+ ', with length: ' + w4leng)
console.log("Fifth Word: "+ fiWo+ ', with length: ' + w5leng)