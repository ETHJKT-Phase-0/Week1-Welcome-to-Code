// Soal 4. Breaking Sentence (yet Again) and Count Each Length
// ```js
// // Problem
// // Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

let word4 = "wow JavaScript is so cool";
let exampleFirstWord4 = word4.substring(0, 3);
let examplesecondWord5 = word4.substring(4, 14);
let examplethirdWord6 = word4.substring(15, 17);
let examplefourthWord7 = word4.substring(18, 20);
let examplefifthWord8 = word4.substring(21, 25);

let firstWordLength = exampleFirstWord4.length;
let secondWordLength = examplesecondWord5.length;
let thirdWordLength = examplethirdWord6.length;
let fourthWordLength = examplefourthWord7.length;
let fifthWordLength = examplefifthWord8.length;

console.log(
  "First Word: " + exampleFirstWord4 + ", with length: " + firstWordLength
);
console.log(
  "Second Word: " + examplesecondWord5 + ", with length: " + secondWordLength
);
console.log(
  "Third Word: " + examplethirdWord6 + ", with length: " + thirdWordLength
);
console.log(
  "Fourth Word: " + examplefourthWord7 + ", with length: " + fourthWordLength
);
console.log(
  "Fifth Word: " + examplefifthWord8 + ", with length: " + fifthWordLength
);
