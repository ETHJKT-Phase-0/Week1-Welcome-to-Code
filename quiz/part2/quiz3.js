// Soal 3. Breaking Sentence (Again) using Substring
// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3 = 'wow JavaScript is so cool';
let exampleFirstWord3 = 
word3.substring(0, 3) + //wow
word3.substring(3, 14) + //JavaScript
word3.substring(14, 17) + //is
word3.substring(17, 20) + //so
word3.substring(20, 25); //cool

console.log('First Word: ' + exampleFirstWord3);