// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

//kata yang akan dpisahkan
let word3 = 'wow JavaScript is so cool';
//memisahkan kata
let exampleKataPertama = word3.substring(0, 3);
let exampleKataKedua = word3.substring(4, 14);
let exampleKataKetiga = word3.substring(15, 17);
let exampleKataKeempat = word3.substring(18, 20);
let exampleKataKelima = word3.substring(21, 25);
//merangkai kata
console.log('Kata Pertama: ' + exampleKataPertama);
console.log('Kata Kedua: ' + exampleKataKedua);
console.log('Kata Ketiga: ' + exampleKataKetiga);
console.log('Kata Keempat: ' + exampleKataKeempat);
console.log('Kata Kelima: ' + exampleKataKelima);
//menyatukan semua kata yang telah dipisah
console.log('Kata Lengkap :' +" "+ `${exampleKataPertama} ${exampleKataKedua} ${exampleKataKetiga} ${exampleKataKeempat} ${exampleKataKelima}`);
