// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

let word4 = "wow JavaScript is so cool";
let exampleFirstWord4 = word4.substring(0, 3);

let firstWordLength = exampleFirstWord4.length;

console.log(
  "First Word: " + exampleFirstWord4 + ", with length: " + firstWordLength
);

let secondWord = word4.substring(4, 14);
let secondWordLen = secondWord.length;

let thirdWord = word4.substring(15, 17);
let thirdWordLen = thirdWord.length;

let fourtWord = word4.substring(18, 20);
let fourtWordLen = fourtWord.length;

let fifthWord = word4.substring(21, 25);
let fifthWordLen = fifthWord.length;

console.log("Second Word: " + secondWord + ", with length: " + secondWordLen);
console.log("Third Word: " + thirdWord + ", with length: " + thirdWordLen);
console.log("fourth Word: " + fourtWord + ", with length: " + fourtWordLen);
console.log("fifith Word: " + fifthWord + ", with length: " + fifthWordLen);
