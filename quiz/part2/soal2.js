// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

let word = 'wow JavaScript is so cool';

const split = word.split(' ');

let exampleFirstWord = split[0]
let exampleSecondWord = split[1]
let exampleThirdWord = split[2]
let exampleFourtWord = split[3]
let exampleFifthWord = split[4]

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + exampleSecondWord);
console.log('Third Word: ' + exampleThirdWord);
console.log('Fourth Word: ' + exampleFourtWord);
console.log('Fifth Word: ' + exampleFifthWord);

console.log('Full Word: ' + exampleFirstWord + " " + exampleSecondWord + " " + exampleThirdWord + " " + exampleFourtWord + " " + exampleFifthWord)
//lanjutkan dengan struktur log diatas
