// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

let word = 'wow JavaScript is so cool';
let exampleFirstWord = word[0] + word[1] + word[2];

console.log('First Word: ' + exampleFirstWord);
//lanjutkan dengan struktur log diatas

let secondWord = '', thirdWord = '', fourthWord = '', fifthWord = '';

for(let i = 0; i < word.length; i++) {
  if (i > 3 && i < 13) {
    secondWord += word[i];
  } else if (i > 14 && i < 17) {
    thirdWord += word[i];
  } else if (i > 17 && i < 20) {
    fourthWord += word[i];
  } else if (i > 20 && i < 25) {
    fifthWord += word[i];
  }
}

console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);