// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word = "wow JavaScript is so cool";
let firstWord = word.substring(0, 3);
let secondWord = word.substring(4, 14);
let thirdWord = word.substring(15, 17);
let fourthWord = word.substring(18, 20);
let fifthWord = word.substring(21, 25);

console.log("First Word: " + firstWord + ", with length: " + firstWord.length)
console.log("Second Word: " + secondWord + ", with length: " + secondWord.length)
console.log("Third Word: " + thirdWord + ", with length: " + thirdWord.length)
console.log("Fourth Word: " + fourthWord + ", with length: " + fourthWord.length)
console.log("Fifth Word: " + fifthWord + ", with length: " + fifthWord.length)

