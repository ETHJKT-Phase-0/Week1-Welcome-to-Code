// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

// code
console.log("LOOPING PERTAMA");
// initial value, j = 1
// increase while j smaller or equal to 10
for (let j = 1; j <= 10; j++) {
    // if looping are running, print this
    console.log(`looping pertama - maju ${j} langkah`);
}

console.log("LOOPING KEDUA");
// initial value, k = 10
// decrease while k greater or equal to 1
for (let k = 10; k >= 1; k--) {
    console.log(`looping kedua - mundur ${k} langkah`);
}