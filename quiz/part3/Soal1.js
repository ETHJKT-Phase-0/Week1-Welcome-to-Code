// Soal 1
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

let hitungMaju = 1;
let hitungMundur = 10

console.log("Looping Pertama");
while(hitungMaju <= 10){
    console.log(`Iterasi ke - ${hitungMaju}`);
    hitungMaju ++;
}
console.log();
console.log("Looping Kedua");
while(hitungMundur >= 1){
    console.log(`Iterasi ke - ${hitungMundur}`);
    hitungMundur--;
}