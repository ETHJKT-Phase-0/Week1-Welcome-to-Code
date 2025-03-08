// ## Soal 3
// ```js

// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut.
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

// Menggunakan Math object
// console.log(Math.round(3.7));    // 4 (pembulatan ke terdekat)
// console.log(Math.floor(3.7));    // 3 (pembulatan ke bawah)
// console.log(Math.ceil(3.2));     // 4 (pembulatan ke atas)
// console.log(Math.abs(-5));       // 5 (nilai absolut)
// console.log(Math.sqrt(16));      // 4 (akar kuadrat)
// console.log(Math.min(2, 5, 1));  // 1 (nilai terkecil)
// console.log(Math.max(2, 5, 1));  // 5 (nilai terbesar)

function konversiMenit(menit) {
    let jam = Math.floor(menit / 60);
    let sisaMenit = menit % 60;
    return `${jam}:${String(sisaMenit).padStart(2, "0")}`
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00