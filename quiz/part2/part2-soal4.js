// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);

let firstWordLength = exampleFirstWord4.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);

// Second word: JavaScript (index 4-14)
let secondWord4 = word4.substring(4, 14);
let secondWordLength = secondWord4.length;
console.log('Second Word: ' + secondWord4 + ', with length: ' + secondWordLength);

// Third word: is (index 15-17)
let thirdWord4 = word4.substring(15, 17);
let thirdWordLength = thirdWord4.length;
console.log('Third Word: ' + thirdWord4 + ', with length: ' + thirdWordLength);

// Fourth word: so (index 18-20)
let fourthWord4 = word4.substring(18, 20);
let fourthWordLength = fourthWord4.length;
console.log('Fourth Word: ' + fourthWord4 + ', with length: ' + fourthWordLength);

// Fifth word: cool (index 21-25)
let fifthWord4 = word4.substring(21, 25);
let fifthWordLength = fifthWord4.length;
console.log('Fifth Word: ' + fifthWord4 + ', with length: ' + fifthWordLength);