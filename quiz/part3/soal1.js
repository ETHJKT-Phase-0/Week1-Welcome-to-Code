// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

console.log('LOOPING PERTAMA');
let i = 1;
let j = 10;
while( i <= 10){
    console.log('Perulangan Maju Ke - ' + i++)
}

console.log("LOOPING KEDUA")
while(j >= 1){
    console.log('Perulangan Mundur Ke - ' + j--)
}