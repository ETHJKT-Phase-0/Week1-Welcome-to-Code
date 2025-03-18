// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

// code
// initialize step
let i = 1;
// start to looping
while (i <= 10) {
    // while i smaller or equal than 1
    // go i step
    console.log(`LOOPING PERTAMA - maju ${i} langkah`);
    i++;
}

// initialize step
i = 10;
while (i >= 1) {
    // while i greater or equal than 1
    // go back i step
    console.log(`LOOPING KEDUA - mundur ${i} langkah`);
    i--;
}