// Belajar Looping | Part 3
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

let hitungMaju= 1;
let hitungMundur=10;

console.log("looping pertama");
while (hitungMaju <= 10) {
    console.log("hitungan maju:" + hitungMaju);
    hitungMaju++;
};
console.log("hitungan maju selesai");

console.log("looping kedua");
while (hitungMundur >= 1) {
    console.log("hitungmundur:" + hitungMundur);
    hitungMundur--;
}
console.log("hitung mundur selesai");

