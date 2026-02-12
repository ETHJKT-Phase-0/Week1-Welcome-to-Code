// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';

let exampleFirstWord4 = word4.substring(0, 3);
let firstWordLength = exampleFirstWord4.length;
console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);

let aa = word4.substring(4, 14)
let a1 = aa.length
console.log('Next Word: ' + aa + ', with length: ' + a1)

let bb = word4.substring(15, 17)
let b1 = bb.length
console.log('Next Word: ' + bb + ', with length: ' + b1)

let cc = word4.substring(18, 20)
let c1 = cc.length
console.log('Next Word: ' + cc + ', with length: ' + c1)

let dd = word4.substring(21, 25)
let d1 = dd.length
console.log('Last Word: ' + dd + ', with length: ' + d1)