
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

let n = 20
let i

console.log("Looping pertama (maju)")
for (i = 0; i < n; i++) {
    console.log(`Lopping ke-${i}`)
}

n = 0
console.log(" ")
console.log("Looping kedua (mundur)")
for (i = 20; i > n; i--) {
    console.log(`Lopping ke-${i}`)
}