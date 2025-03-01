// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3 = 'wow JavaScript is so cool';
let firstWord = word3.substring(0, 3); // Otuput: "wow"
let secondWord = word3.substring(4, 14); // Output: "Javascript"
let thirdWord = word3.substring(15, 17); // Output: "is"
let fourthWord = word3.substring(18, 20); // Output: "so"
let fifthWord = word3.substring(21, 25); // Output: "cool"

console.log('First Word: ' + firstWord);
console.log('Second Word: '+ secondWord);
console.log('Third Word: '+ thirdWord);
console.log("Fourth Word: " + fourthWord);
console.log('Fifth Word: ' + fifthWord);