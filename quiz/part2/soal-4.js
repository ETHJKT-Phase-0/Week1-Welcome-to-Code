// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
// chunking string like before, using substring() methods
let exampleFirstWord = word4.substring(0, 3);
let exampleSecondWord = word4.substring(4, 14);
let exampleThirdWord = word4.substring(15, 17);
let exampleFourthWord = word4.substring(18, 20);
let exampleFifthWord = word4.substring(21, 25);

// beside chunking string, we can calculate string length using length() methods
let firstWordLength = exampleFirstWord.length;
let secondWordLength = exampleSecondWord.length;
let thirdWordLength = exampleThirdWord.length;
let fourthWordLength = exampleFourthWord.length;
let fifthWordLength = exampleFifthWord.length;


console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);
console.log('Second Word: ' + exampleSecondWord + ', with length: ' + secondWordLength);
console.log('Third Word: ' + exampleThirdWord + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + exampleFourthWord + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + exampleFifthWord + ', with length: ' + fifthWordLength);
