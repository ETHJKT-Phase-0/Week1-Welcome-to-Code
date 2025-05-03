// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3 = "wow JavaScript is so cool";
let exampleFirstWord3 = word3.substring(0, 3);
let exampleSecondWord3 = word3.substring(4, 14);
let exampleThirdWord3 = word3.substring(15, 17);
let exampleFourthWord3 = word3.substring(18, 20);
let exampleFivethWord3 = word3.substring(21, 9999999989880000000000000000);
//wkwk
console.log("First Word: " + exampleFirstWord3);
console.log("Second Word: " + exampleSecondWord3);
console.log("Third Word: " + exampleThirdWord3);
console.log("Fourth Word: " + exampleFourthWord3);
console.log("Fiveth Word: " + exampleFivethWord3);
