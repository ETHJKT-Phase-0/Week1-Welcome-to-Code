// ## Soal 2. Index Accessing - 1 by 1
// js
// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

let word2 = "wow JavaScript is so cool";
let exampleFirstWord = word2[0] + word2[1] + word2[2];
let secondWord =
  word2[4] +
  word2[5] +
  word2[6] +
  word2[7] +
  word2[8] +
  word2[9] +
  word2[10] +
  word2[11] +
  word2[12] +
  word2[13];

let thirdWord = word2[15] + word2[16];

let fourthWord = word2[18] + word2[19];

let fifthWord = word2[21] + word2[22] + word2[23] + word2[24];

//lanjutkan dengan struktur log diatas
console.log(
  exampleFirstWord +
    " " +
    secondWord +
    " " +
    thirdWord +
    " " +
    fourthWord +
    " " +
    fifthWord
);

// ------------------------------------
console.log("");
// -----------------------------------
