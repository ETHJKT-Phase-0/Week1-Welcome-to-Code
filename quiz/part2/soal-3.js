// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3 = 'wow JavaScript is so cool';
// chunking string like before, but using substring() methods
// substring are methods that used to extract character between to indices from string.
let exampleFirstWord = word3.substring(0, 3);
let exampleSecondWord = word3.substring(4, 14);
let exampleThirdWord = word3.substring(15, 17);
let exampleFourthWord = word3.substring(18, 20);
let exampleFifthWord = word3.substring(21, 25);


console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + exampleSecondWord);
console.log('Third Word: ' + exampleThirdWord);
console.log('Fourth Word: ' + exampleFourthWord);
console.log('Fifth Word: ' + exampleFifthWord);
