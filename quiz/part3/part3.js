//Belajar Looping | Part 3
//Soal 1

//js
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
console.log("Penggunaan WHILE LOOP");
console.log("===LOOPING PERTAMA===");
let up = 0;

while (up < 100) {
    // console.log("Counter up: " + up);
    up += 15;
}

console.log();
console.log('===LOOPING KEDUA===');
let down = 1000;

while (down > 0) {
    // console.log("Counter down: " + down); 
    down -= 5;
}
console.log();

//Soal 2. Melakukan Looping Menggunakan For

// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
console.log("===Penggunaan FOR LOOP===");
console.log();
console.log("Looping Pertama For Loop")
for (let countUp = 0;countUp < 100; countUp++) {
    // console.log("Count up coy : "+ countUp);
}
console.log();
console.log("Looping Kedua For Loop")
for (let countDown = 100;countDown > 0; countDown--) {
    countDown -= 1;
    // console.log("Count down coy : "+ countDown);
}
console.log();

//Soal 3. Angka Ganjil dan Genap
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL
console.log("===GANJIL GENAP===");
for (let countUp = 0; countUp < 100; countUp++) {
    if (countUp % 2 == 0) {
        // console.log("Angka " + countUp + " adalah GENAP");
    }
    else {
        // console.log("Angka " + countUp + " adalah GANJIL");
    }
}
console.log();
//Soal 4. counter kelipatan

// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.
console.log("===Counter Kelipatan===");
//pertambahan dua kelipatan 3
for (let num = 1; num < 101; num++) {
    if (num % 2 == 0 && num % 3 == 0) {
        // console.log("Angka " + num + " adalah 2 kelipatan 3.");
    }
}
console.log();
for (let num = 1; num < 101; num++) {
    if (num % 6 == 0 && num % 5 == 0) {
        // console.log("Angka " + num + " adalah 5 kelipatan 6.");
    }
}
console.log();
for (let num = 1; num < 101; num++) {
    if (num % 10 == 0 && num % 9 == 0) {
        // console.log("Angka " + num + " adalah 9 kelipatan 10.");
    }
}
console.log();

// Soal 5. Bintang asteriks js
// Problem buatlah bintang seperti berikut
console.log("Bintang Asteriks JS");
let input = 5
//hasilnya
//*
//**
//***
//****
//*****
for (let numbah = 1; numbah <= input; numbah++) {
    let star = "* ";
    console.log(star.repeat(numbah)); //yang di-print objek nya "*" 
    //sedangkan fungsi yang dipanggil sebagai input repetesi dari objek "*" yang di-print
}

//Tips pengerjaan ada di video berikut :
//[Looping](https://youtu.be/kyobpgoqx2c)

//[Materi Looping](../../study-materials/part5.md)