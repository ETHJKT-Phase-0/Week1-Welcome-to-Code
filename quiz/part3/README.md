# Belajar Looping | Part 3
## Soal 1

```js
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

console.log('LOOPING PERTAMA');
let i = 1;
while (i <= 10) {
    console.log(`${i} - I will become a frontend developer`);
    i++;
}

console.log('LOOPING KEDUA');
let j = 10;
while (j >= 1) {
    console.log(`${j} - I will become a backend developer`);
    j--;
}
```
## Soal 2. Melakukan Looping Menggunakan For
```js
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

console.log('LOOPING PERTAMA');
for (let k = 1; k <= 10; k++) {
    console.log(`${k} - I will become a frontend developer`);
}

console.log('LOOPING KEDUA');
for (let l = 10; l >= 1; l--) {
    console.log(`${l} - I will become a backend developer`);
}```
## Soal 3. Angka Ganjil dan Genap

```js
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL
for (let counter = 1; counter <= 100; counter++) {
    if (counter % 2 === 0) {
        console.log("GENAP");
    } else {
        console.log("GANJIL");
    }
}
```
## Soal 4. counter kelipatan
```js
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

// Perulangan dengan pertambahan 2, cek kelipatan 3
console.log('--- Kelipatan dengan pertambahan 2 ---');
for (let counter = 1; counter <= 100; counter += 2) {
    if (counter % 3 === 0) {
        console.log(`${counter} Kelipatan 3`);
    }
}

// Perulangan dengan pertambahan 5, cek kelipatan 6
console.log('--- Kelipatan dengan pertambahan 5 ---');
for (let counter = 1; counter <= 100; counter += 5) {
    if (counter % 6 === 0) {
        console.log(`${counter} Kelipatan 6`);
    }
}

// Perulangan dengan pertambahan 9, cek kelipatan 10
console.log('--- Kelipatan dengan pertambahan 9 ---');
for (let counter = 1; counter <= 100; counter += 9) {
    if (counter % 10 === 0) {
        console.log(`${counter} Kelipatan 10`);
    }
}

```
## Soal 5. Bintang asteriks
```js
// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//*****

let output = "";
for (let i = 1; i <= input; i++) {
    for (let j = 1; j <= i; j++) {
        output += "*";
    }
    output += "\n";
}
console.log(output);

```

---
Tips pengerjaan ada di video berikut :
[Looping](https://youtu.be/kyobpgoqx2c)

[Materi Looping](../../study-materials/part5.md)