// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

let maju = 0;
while(maju < 10){
    maju++;

    console.log('LOOPING PERTAMA: ' + maju);
}

let mundur = 10;
while(mundur > 0){
    mundur--;

    console.log('LOOPING KEDUA: ' + mundur)
}