// ## Soal 1

// ```js
// // Problem
// // Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// // Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// // menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
// //tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
// ```

let i = 0;

console.log('LOOPING PERTAMA');
while (i < 10) {
    i++;
    console.log(i);
}

i = 11;
console.log('LOOPING KEDUA');
while (i > 0 ) {
    i--;
    console.log(i);
}