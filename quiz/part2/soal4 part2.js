// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

let word4 = "wow JavaScript is so cool";
let exampleFirstWord1 = word4.substring(0, 3);
let exampleDoubleWord2 = word4.substring(4, 14);
let exampleThirdWord3 = word4.substring(15, 17);
let exampleFourWord4 = word4.substring(18, 20);
let exampleFiveWord5 = word4.substring(21, 25);

let firstWordLength = exampleFirstWord1.length;
let doubleWordLength2 = exampleDoubleWord2.length;
let firstWordLength3 = exampleThirdWord3.length;
let firstWordLength4 = exampleFourWord4.length;
let firstWordLength5 = exampleFiveWord5.length;

console.log(
  "First Word: " + exampleFirstWord1 + ", with length: " + firstWordLength
);
console.log(
  "Double Word: " + exampleDoubleWord2 + ", with length: " + doubleWordLength2
);
console.log(
  "Third Word: " + exampleThirdWord3 + ", with length: " + firstWordLength3
);
console.log(
  "Four Word: " + exampleFourWord4 + ", with length: " + firstWordLength4
);
console.log(
  "Five Word: " + exampleFiveWord5 + ", with length: " + firstWordLength5
);