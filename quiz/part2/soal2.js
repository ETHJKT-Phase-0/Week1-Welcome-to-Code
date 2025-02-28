// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

// let word = 'wow JavaScript is so cool';
// let exampleFirstWord = word[0] + word[1] + word[2];

// console.log('First Word: ' + exampleFirstWord);

let word = 'wow JavaScript is so cool';
let exampleFirstWord = word.split(" ")[0];
let exampleSecondWord = word.split(" ")[1];
let exampleThirdWord = word.split(" ")[2];
let exampleFourtWord = word.split(" ")[3];
let exampleFifthWord = word.split(" ")[4];


console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + exampleSecondWord);
console.log('Third Word: ' + exampleThirdWord);
console.log('Fourth Word: ' + exampleFourtWord);
console.log('Fifth Word: ' + exampleFifthWord);
