// Quiz Pemrograman Sebelum Masuk Looping | Part 2

//  Soal 1


//1. Let's Form a Sentence

// Problem
// Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +.
//  Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain
//  untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan
//   tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!

let word = "JavaScript";
let second = "is";
let third = "awesome";
let fourth = "and";
let fifth = "I";
let sixth = "love";
let seventh = "it!";

//code here
console.log(word + " " + second + " " + third + " " + fourth + " " + fifth + " " + sixth + " " + seventh);

// Soal 2. Index Accessing - 1 by 1


// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

let word2 = "wow JavaScript is so cool";
let exampleFirstWord = word2[0] + word2[1] + word2[2];

console.log("First Word: " + exampleFirstWord);
//lanjutkan dengan struktur log diatas
let exampleSecondWord = word2[4] + word2[5] + word2[6] + word2[7] + word2[8] + word2[9] + word2[10] + word2[11] + word2[12] + word2[13];
console.log("Second Word: " + exampleSecondWord);

// Soal 3. Breaking Sentence (Again) using Substring

//js
// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!


let word3 = "wow JavaScript is so cool";
let exampleFirstWord3 = word3.substring(0, 3);

console.log("First Word: " + exampleFirstWord3);

let exampleSecondWord3 = word3.substring(4, 14);
console.log("Second Word: " + exampleSecondWord3);
let exampleThirdWord3 = word3.substring(15, 17);
console.log("third Word: " + exampleThirdWord3);
let exampleFourthWord3 = word3.substring(18, 20);
console.log("Second Word: " + exampleFourthWord3);
let exampleFifthWord3 = word3.substring(21, 25);
console.log("Second Word: " + exampleFifthWord3);
console.log(
  exampleFirstWord3 +
    " " +
    exampleSecondWord3 +
    " " +
    exampleThirdWord3 +
    " " +
    exampleFourthWord3 +
    " " +
    exampleFifthWord3
);


// Soal 4. Breaking Sentence (yet Again) and Count Each Length

//js
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

let word4 = "wow JavaScript is so cool";
let exampleFirstWord4 = word4.substring(0, 3);

let firstWordLength = exampleFirstWord4.length;

console.log(
  "First Word: " + exampleFirstWord + ", with length: " + firstWordLength
);

let exampleSecondWord4 = word4.substring(4, 14);
let secondWordLength = exampleSecondWord4.length;
console.log(
  "First Word: " + exampleSecondWord4 + ", with length: " + secondWordLength
);
// tulis code sesuai dengan keterangan soalnya dan pola example yang ada

// Selamat Mengerjakan 👨🏻‍🌾
