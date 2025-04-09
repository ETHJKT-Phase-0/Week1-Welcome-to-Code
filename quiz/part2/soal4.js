// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);

let firstWordLength = exampleFirstWord4.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);

let example2Length = word4.substring(4, 15);
let secondWordLength = example2Length.length;
console.log ('Second Word: ' + example2Length + ', with length: ' + secondWordLength);

let example3Length = word4.substring(15, 17);
let thirthWordLength = example3Length.length;
console.log (`Thirth Word: ` + example3Length + ', with length: ' + thirthWordLength);

let example4Length = word4.substring(18, 20);
let fourthWordLength = example4Length.length;
console.log (`Fourth Word: ` + example4Length + ', with length: ' + fourthWordLength);

let example5Length = word4.substring(21, 25);
let fifthWordLength = example5Length.length;
console.log (`Fifth word: ` + example5Length + ', with length: ' + fifthWordLength);
