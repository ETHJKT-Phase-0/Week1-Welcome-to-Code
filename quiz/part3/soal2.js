// ## Soal 2. Melakukan Looping Menggunakan For
// ```js
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

let angka = 10;
for (let i = 1; i <= angka; i++) {
    console.log("LOOPING PERTAMA : " + i);
}

console.log('')

angka = 1;
for (i = 10; i >= angka; i--) {
    console.log("LOOPING KEDUA : " + i);
}