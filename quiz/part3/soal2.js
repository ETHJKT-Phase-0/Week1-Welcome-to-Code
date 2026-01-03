//Soal 2. Melakukan Looping Menggunakan For
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

console.log("looping pertama (maju)");
for (let i = 1; i < 6; i++) {
    console.log("ini looping ke " + i);
}
console.log();
console.log("looping kedua (mundur)");
for (let j = 5; j > 0; j--) {
    console.log("ini looping ke " + j);
}