// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

let angka = 1;
let finish = 3;

console.log("Loping pertama");
while (angka <= finish) {
    console.log("Maju " + angka);
    angka++;
}

angka--;
console.log("Looping kedua");
while (angka >= 1) {
    console.log("Mundur " + angka);
    angka--;
}