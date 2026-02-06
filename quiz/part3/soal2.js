// ## Soal 2. Melakukan Looping Menggunakan For

// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua


for (let i = 0; i < 10; i += 2){
    console.log(`Move Forward!! ${i} `);
}

for (let i = 100; i >= 0; i -= 10 ){
    console.log(`Fast Backward!! ${i}`);
}