// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


//kata yang akan dpisahkan
let word4 = 'wow JavaScript is so cool';
//memisahkan kata
let exampleKataPertama = word4.substring(0, 3);
let exampleKataKedua = word4.substring(4, 14);
let exampleKataKetiga = word4.substring(15, 17);
let exampleKataKeempat = word4.substring(18, 20);
let exampleKataKelima = word4.substring(21, 25);
let exampleSemuaKata = word4.substring(0, 25);

//menghitung jumlah kata
let kataPertamaLength = exampleKataPertama.length;
let kataKeduaLength = exampleKataKedua.length;
let kataKetigaLength = exampleKataKetiga.length;
let kataKeempatLength = exampleKataKeempat.length;
let kataKelimaLength = exampleKataKelima.length;
let SemuaKataLength = exampleSemuaKata.length;

//memperlihatkan kata danjumlahnya
console.log('Kata Pertama: ' + exampleKataPertama + ', Jumlah Kata: ' + kataPertamaLength);
console.log('Kata Kedua: ' + exampleKataKedua + ', Jumlah Kata: ' + kataKeduaLength);
console.log('Kata Ketiga: ' + exampleKataKetiga + ', Jumlah Kata: ' + kataKetigaLength);
console.log('Kata Keempat: ' + exampleKataKeempat + ', Jumlah Kata: ' + kataKeempatLength);
console.log('Kata Kelima: ' + exampleKataKelima + ', Jumlah Kata: ' + kataKelimaLength);
console.log('Semua Kata : ' +" "+ `${exampleKataPertama} ${exampleKataKedua} ${exampleKataKetiga} ${exampleKataKeempat} ${exampleKataKelima}` +" "+ ', Jumlah Kata' +" "+ `${SemuaKataLength}`);
