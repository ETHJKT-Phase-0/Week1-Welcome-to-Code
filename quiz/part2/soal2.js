// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

//kata yang harus dipecahkan
let word = 'wow JavaScript is so cool';

//memecahkan kata
let exampleKataPertama = word[0] + word[1] + word[2];
let exampleKataKedua = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] +word[13];
let exampleKataKetiga = word[15] + word[16];
let exampleKataKeempat = word[18] + word[19];
let exampleKataKelima = word[21] + word[22] + word[23] + word[24];

//menampilkan kata satu persatu
console.log('Kata Pertama: ' + exampleKataPertama);
console.log('Kata Kedua: ' + exampleKataKedua);
console.log('Kata Ketiga: ' + exampleKataKetiga);
console.log('Kata Keempat: ' + exampleKataKeempat);
console.log('Kata Kelima: ' + exampleKataKelima)

//menggabungkan semua kata
console.log('Semua Kata:' +" "+ `${exampleKataPertama} ${exampleKataKedua} ${exampleKataKetiga} ${exampleKataKeempat} ${exampleKataKelima}`);