// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

console.log("LOOPING PERTAMA")
let maju = 10;
for (let i = 0; i <= maju; i++) {
    console.log("anda sudah maju sebanyak", i)
}

console.log("LOOPING KEDUA")
let mundur = 9;
for (i = mundur; i >= 0; i--) {
    console.log("anda sudah mundur sebanyak", i)
}
