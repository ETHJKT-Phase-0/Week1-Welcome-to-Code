// ## Soal 1

// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

console.log("LOOPING MAJU")
let i = 1
  while(i < 16) {
    console.log(`looping maju ke-${i} I LOVE JAVASCRIPT`)
    i++
  }

console.log("/-------- break ----------/");


console.log("LOOPING MUNDUR")
let j = 15
  while(j > 0) {
    console.log(`looping mundur ke-${j} i will become fullstack developer`)
    j--
  }