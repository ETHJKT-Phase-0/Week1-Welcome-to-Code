// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

console.log('LOOPING PERTAMA');
let i = 2; // Mulai dari 2
while (i <= 20) { // Loop sampai 20
    console.log(i + ' - I love coding');
    i += 2; // Increment +2
}

console.log('LOOPING KEDUA');
let j = 20; // Mulai dari 20
while (j >= 2) { // Loop sampai 2
    console.log(j + ' - I will become a developer');
    j -= 2; // Decrement -2
}