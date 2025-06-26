// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

let word = 'wow JavaScript is so cool';
// let exampleFirstWord = word[0] + word[1] + word[2];

// console.log('First Word: ' + exampleFirstWord);
//lanjutkan dengan struktur log diatas
let w1 = word[0] + word[1] + word[2]
let w2 = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13] + word[14]
let w3 = word[15] + word[16]
let w4 = word[18] + word[19]
let w5 = word[21]+word[22]+word[23]+word[24]
let words = [w1, w2, w3, w4, w5]
for(let i = 1;i<=5;i++){
    console.log("Kata ke " + i + " = "+words[i-1])
}
// let secWord = word.substring(4,14)
// let thiWo = word.substring(14,18)
// let foWo = word.substring(18,21)
// let fiWo = word.substring (21,25)
// console.log("Second Word: "+ secWord)
// console.log("Third Word: "+ thiWo)
// console.log("Fourth Word: "+ foWo)
// console.log("Fifth Word: "+ fiWo)
