// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
// tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

let n = 20
let i = 0

console.log("Looping pertama (maju)")
while (i < n) {
    console.log(`Lopping ke-${i}`)
    i++
}

i = 0
console.log(" ")
console.log("Looping kedua (mundur)")
while (n > i) {
    console.log(`Lopping ke-${n}`)
    n--
}