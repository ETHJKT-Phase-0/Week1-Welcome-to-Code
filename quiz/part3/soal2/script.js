// ```js
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
// ```

console.log("Looping Pertama :")

let angkaMaju = "";
for (let i = 1; i <= 10; i++) {
    angkaMaju = "ïni adalah angka" + " " + i;
    console.log(angkaMaju);
  }
  
  console.log("Looping Kedua :")
  
let angkaMundur = "";
for (let i = 10; i >= 1; i--) {
    angkaMundur = "ïni adalah angka" + " " + i;
    console.log(angkaMundur);
    }
