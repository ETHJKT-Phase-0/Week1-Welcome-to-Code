// ## Soal 1


// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

let i = 0;

while (i < 10) {
    console.log(`I ini Maju Bertambah!, ${i}`);
    i++;
}

while (i > 0){
    i--;
    console.log(`I ini mundur Berkurang!, ${i}`);
}