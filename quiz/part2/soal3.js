// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);

let firstWordLength = exampleFirstWord4.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);

let secondWord = word4.substring(4,14);
console.log('Second Word: '+secondWord+", with length: "+secondWord.length);

let thirdWord = word4.substring(15,17);
console.log('Third Word: '+thirdWord+", with length: "+thirdWord.length);

let fourthWord = word4.substring(18,20);
console.log('Fourh Word: '+fourthWord+", with length: "+fourthWord.length);

let fifthWord = word4.substring(21, 25);
console.log('Fifth Word: '+fifthWord+", with length: "+fifthWord.length);