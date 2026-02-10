//1. Let's Form a Sentence

// Problem
// Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +.
//  Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain
//  untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan
//   tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!

let word_ = 'JavaScript';
let second = 'is';
let third = 'awesome';
let fourth = 'and';
let fifth = 'I';
let sixth = 'love';
let seventh = 'it!';

let sentence = word_ + " " + second + " " + third + " " + fourth + " " + fifth + " " + sixth + " " + sixth + " " + seventh;
console.log(sentence);

//Problem
//Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
// ersebut!

let word = 'wow JavaScript is so cool';
let exampleFirstWord = word[0] + word[1] + word[2];

console.log('First Word: ' + exampleFirstWord);

//try myself
let words = 'Hidup Jokowi Hidup Jotaro Hidup Prabowo';
let firstWord = words[0]+ words[1] + words[2] + words[16] + words[17];
let secondWord = words[6] + words[7] + words[10] + words[9] + words[8] + words[11];
let thirdWord = words.slice(0,5) + " " + words.slice(13,18) + " " + words.slice(26,31); 
console.log("First word: " + firstWord);
console.log("Second word: " + secondWord);
console.log("Third word: " + thirdWord);

//Soal 3. Breaking Sentence (Again) using Substring js
// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3 = 'wow JavaScript is so cool';
let exampleFirstWord3 = word3.substring(0, 3);
let exampleFirstWord5 = word3.substring(15,17);
let exampleFirstWord7 = word.substring(21,25);

console.log('First Word: ' + exampleFirstWord3);
console.log('Second Word: ' + exampleFirstWord5 + " " + exampleFirstWord7);


// Soal 4. Breaking Sentence (yet Again) and Count Each Lengths
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);

let firstWordLength = exampleFirstWord4.length;
let secondWordLength = exampleFirstWord5.length;
let thirdWordLength = exampleFirstWord7.length;

console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);
console.log('Second Word: ' + exampleFirstWord5 + ', with length: ' + secondWordLength);
console.log('Third Word: ' + exampleFirstWord7 + ', with length: ' + thirdWordLength);
//tulis code sesuai dengan keterangan soalnya dan pola example yang ada

//Selamat Mengerjakan 👨🏻‍🌾