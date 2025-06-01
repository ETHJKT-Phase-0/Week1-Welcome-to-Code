// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

console.log(`\nWhile looping`)
console.log(`Looping Pertama`)
let i = 0
while (i < 10) {
    console.log(i)
    i++
}

i = 10
console.log(`Looping Kedua`)
while (i >= 0) {
    console.log(i)
    i--
}

// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

console.log(`\nFor Looping`)
console.log ("Looping Pertama")
for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log ("Looping Kedua")
for (let i = 10; i > 0; i--) {
    console.log(i);
}

// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

console.log (`\nGanjil Genap`)
for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        console.log(`${i} Genap`);
    } else {
        console.log(`${i} Ganjil`);
    }
}

// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

console.log('\ncounter kelipatan');

console.log(`Kelipatan 3`)
for (let i = 0; i < 100; i += 2) {
    if (i % 3 == 0) {
        console.log(`${i} kelipatan 3`)
    }
}

console.log(`Kelipatan 6`)
for (let i = 0; i < 100; i += 5) {
    if (i % 6 == 0) {
        console.log(`${i} kelipatan 6`)
    }
}

console.log(`Kelipatan 10`)
for (let i = 0; i < 100; i += 9) {
    if (i % 10 == 0) {
        console.log(`${i} kelipatan 10`)
    }
}


// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//*****

console.log(`\nLooping bintang`)
let pattern = "";
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    pattern += "\n"
}
console.log(pattern)