//## Soal 2. Melakukan Looping Menggunakan For
//```js
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

for(let i = 1; i < 2; i++){
    console.log("Looping Pertama ");
    for(let j = 1; j <= 3; j++){
        console.log("Lopping maju " + j + " kali");
    }
    console.log("Looping Kedua ");
    for(let j = 3; j >= 1; j--){
        console.log("Lopping mundur " + j + " kali");
    }
    console.log("Looping Selesai ");
}