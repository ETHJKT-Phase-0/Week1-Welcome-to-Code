// # Belajar Looping | Part 3
// ## Soal 1

// ```js
// // Problem
// // Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// // Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// // menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
// //tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
let i = 0;
let mundur = 5;
while(i < 5) {
  console.log(`LOOPING PERTAMA [${i}]`)
  i++
}
console.log()
while(mundur > 0) {
  mundur--
  console.log(`LOOPING KEDUA [${mundur}]`)
}
// ```