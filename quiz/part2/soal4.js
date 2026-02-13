// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

let word4 = "wow JavaScript is so cool";
let exampleFirstWord4 = word4.substring(0, 3);
let firstWordLength = exampleFirstWord4.length;

let secondWord4 = word4.substring(4, 14);
let thirdWord4 = word4.substring(15, 17);
let fourthWord4 = word4.substring(18, 20);
let fifthWord4 = word4.substring(21, 25);

console.log(
  "First Word: " + exampleFirstWord4 + ", with length: " + firstWordLength
);
console.log(
  "Second Word: " + secondWord4 + ", with length: " + secondWord4.length
);
console.log(
  "Third Word: " + thirdWord4 + ", with length: " + thirdWord4.length
);
console.log(
  "Fourth Word: " + fourthWord4 + ", with length: " + fourthWord4.length
);
console.log(
  "Fifth Word: " + fifthWord4 + ", with length: " + fifthWord4.length
);
