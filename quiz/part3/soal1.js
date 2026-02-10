// ## Soal 1
// ```js

// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

console.log("LOOPING PERTAMA");

let angka = 1;
while(angka <= 10) {
    console.log("HITUNG MAJU : " + angka);
    angka++;
}

console.log(' ')

angka = 10;
while(angka >= 1) {
    console.log("HITUNG MUNDUR : " + angka);
    angka--;
}