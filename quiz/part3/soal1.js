// Soal 1
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

let i = 0;
console.log('LOOPING PERTAMA');
while (i < 20) {
    i += 1;
    console.log(i);
}
console.log('LOOPING KEDUA');
i = 20;
while (i > 0) {
    i -= 1;
    console.log(i);
}
