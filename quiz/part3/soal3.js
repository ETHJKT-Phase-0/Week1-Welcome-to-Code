// ---------------------------------------------------- Soal 1 -----------------------------------------------------

// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
// tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

let hitungWhile1 = 0;

while (hitungWhile1 <= 5) {
  console.log("Looping Pertama (While): " + hitungWhile1);
  hitungWhile1++;
}

console.log("\n");

let hitungWhile2 = 0;

while (hitungWhile2 >= -5) {
  console.log("Looping Kedua (While): " + hitungWhile2);
  hitungWhile2--;
}

console.log(
  "------------------------------------------------------------------------------------------------------"
);

// ---------------------------------------------------- Soal 2 -----------------------------------------------------

// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
// tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

for (let hitungFor1 = 0; hitungFor1 <= 5; hitungFor1++) {
  console.log("Looping Pertama(For): " + hitungFor1);
}

console.log("\n");

for (let hitungFor2 = 0; hitungFor2 >= -5; hitungFor2--) {
  console.log("Looping Kedua(For): " + hitungFor2);
}

console.log(
  "------------------------------------------------------------------------------------------------------"
);

// ---------------------------------------------------- Soal 3 -----------------------------------------------------

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

for (let i = 0; i < 100; i++) {
  if (i % 2 === 0) {
    console.log(`${i} : ini bilangan Genap`);
  } else {
    console.log(`${i} : ini bilangan Ganjil`);
  }
}

console.log(
  "------------------------------------------------------------------------------------------------------"
);

// ---------------------------------------------------- Soal 4 -----------------------------------------------------

// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

for (let i = 1; i < 100; i += 2) {
  if (i % 3 === 0) {
    console.log(`${i} : merupakan 3 kelipatan 3`);
  }
}

console.log("\n");

for (let i = 1; i < 100; i += 5) {
  if (i % 6 === 0) {
    console.log(`${i} : merupakan 6 kelipatan 6`);
  }
}

console.log("\n");

for (let i = 1; i < 100; i += 9) {
  if (i % 10 === 0) {
    console.log(`${i} : merupakan 10 kelipatan 10`);
  }
}

console.log(
  "------------------------------------------------------------------------------------------------------"
);

// ---------------------------------------------------- Soal 5 -----------------------------------------------------

// Problem buatlah bintang seperti berikut
let input = 5;
//hasilnya
//*
//**
//***
//****
//*****

for (let i = 1; i <= input; i++) {
  let bintang = "";
//   console.log(i);

  for (let j = 1; j <= i; j++) {
    bintang += "*";
  }
  console.log(bintang);
}
