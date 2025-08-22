//
//## Soal 1

//```js
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua


console.log("LOOPING PERTAMA");
let i = 1; // mulai dari 1
while (i <= 10) {  // batas 10
  console.log(i + " - Naik");
  i++; // naik 1-1
}

console.log("LOOPING KEDUA");
let j = 10; // mulai dari 10
while (j >= 1) {
  console.log(j + " - Turun");
  j--; // turun 1-1
}
