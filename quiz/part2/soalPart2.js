// # Quiz Pemrograman Sebelum Masuk Looping | Part 2
// ## Soal 1
// ```js
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

console.log(`|===================|\n|=====Soal No 1=====|\n|===================|`);

console.log(word + " " + second + " " + third + " " + fourth + " " + fifth + " " + sixth + " " + seventh);
// Cara ke 2
let Kalimat = word + " " + second + " " + third + " " + fourth + " " + fifth + " " + sixth + " " + seventh;

console.log("Ini untuk Cara ke 2 " + Kalimat);

// ## Soal 2. Index Accessing - 1 by 1
// ```js
// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

let word2 = "wow JavaScript is so cool";
let exampleFirstWord2 = word2[0] + word2[1] + word2[2];
let exampleSecondWord2 = word2[4] + word2[5] + word2[6] + word2[7] + word2[8] + word2[9] + word2[10] + word2[11] + word2[12] + word2[13];
let exampleThirdWord2 = word2[15] + word2[16];
let exampleFourthdWord2 = word2[18] + word2[19];
let exampleFifthdWord2 = word2[21] + word2[22] + word2[23] + word2[24];

console.log(`|===================|\n|=====Soal No 2=====|\n|===================|`);

console.log(word2.length);
console.log("First Word : " + exampleFirstWord2);
console.log("Second Word : " + exampleSecondWord2);
console.log("Third Word : " + exampleThirdWord2);
console.log("Fourth Word : " + exampleFourthdWord2);
console.log("Fifth Word : " + exampleFifthdWord2);
console.log("all Word : " + exampleFirstWord2 + " " + exampleSecondWord2 + " " + exampleThirdWord2 + " " + exampleFourthdWord2 + " " + exampleFifthdWord2);

//lanjutkan dengan struktur log diatas

// ## Soal 3. Breaking Sentence (Again) using Substring
// ```js
// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3 = 'wow JavaScript is so cool';
let exampleFirstWord3 = word3.substring(0, 3);
let exampleSecondWord3 = word3.substring(4, 14);
let exampleThirdWord3 = word3.substring(14, 17);
let exampleFourthWord3 = word3.substring(17, 20);
let exampleFifthWord3 = word3.substring(20, 25);

console.log(`|===================|\n|=====Soal No 3=====|\n|===================|`);

console.log('First Word: ' + exampleFirstWord3);
console.log("Second Word : " + exampleSecondWord3);
console.log("Third Word : " + exampleThirdWord3);
console.log("Fourth Word : " + exampleFourthWord3);
console.log("Fifth Word : " + exampleFifthWord3);


// ## Soal 4. Breaking Sentence (yet Again) and Count Each Length
// ```js
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);
let exampleSecondWord4 = word4.substring(4, 14);
let exampleThirdWord4 = word4.substring(15, 17);
let exampleFourthWord4 = word4.substring(18, 20);
let exampleFifthWord4 = word4.substring(21, 25);

console.log(`|===================|\n|=====Soal No 4=====|\n|===================|`);

let firstWordLength = exampleFirstWord4.length;
let secondWordLength = exampleSecondWord4.length;
let thirdWordLength = exampleThirdWord4.length;
let fourthWordLength = exampleFourthWord4.length;
let fifthWordLength = exampleFifthWord4.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + exampleSecondWord4 + ', with length: ' + secondWordLength);
console.log('Third Word: ' + exampleThirdWord4 + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + exampleFourthWord4 + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + exampleFifthWord4 + ', with length: ' + fifthWordLength);


// ```
