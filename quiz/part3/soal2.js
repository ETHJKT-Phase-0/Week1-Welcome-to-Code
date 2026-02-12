//Soal 2. Melakukan Looping Menggunakan For
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

console.log("looping pertama");
let i=1;
for (let i= 1; i <= 10; i++) {
    console.log("hasil hitungan maju:" + i);
}
console.log("hitungan maju selesai");


console.log("looping kedua");
let j =10;
for (let j= 10; j >= 1; j--) {
    console.log("hasil hitungan mundur:" + j);
}
console.log("hitungan mundur selesai");
