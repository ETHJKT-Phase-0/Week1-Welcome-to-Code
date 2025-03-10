// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);
let Second = word4.substring(4, 14);
let third = word4.substring(15, 17);
let fourth = word4.substring(18, 20); 
let fifhty = word4.substring(21, 25);

let firstWordLength = exampleFirstWord4.length;
let ScondWordLength = Second.length;
let thirdtWordLength = third.length;
let fourthWordLength = fourth.length;
let fifhtyWordLength = fifhty.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + Second + ', with length: ' + ScondWordLength);
console.log('thrid Word: ' + third + ', with length: ' + thirdtWordLength);
console.log('Fourth Word: ' + fourth + ', with length: ' + fourthWordLength);
console.log('Fifthy Word: ' + fifhty + ', with length: ' + fifhtyWordLength);
