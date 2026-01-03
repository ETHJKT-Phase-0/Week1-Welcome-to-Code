//Soal 1
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

console.log("looping pertama (maju)");

let i = 1;
while (i<=5) {
    console.log("ini looping ke " + i);
    i++;
}
console.log();
console.log("looping kedua (mundur)");
let j = 5;
while (j>=1) {
    console.log("ini looping ke " + j);
    j--;
}