// ## Soal 1

// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

// code:
let nilai = 1;
console.log("LOOPING PERTAMA")
while (nilai <= 10) {
    console.log(nilai++);
}
nilai = 10;
console.log("LOOPING KEDUA")
while (nilai >= 1) {
    console.log(nilai--);
}