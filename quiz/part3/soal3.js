// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

console.log("Perhitungan Ganjil dan Genap dengan For Looping");

for (let i = 1; i < 101; i++) {
  if (i % 2 === 0) {
    console.log("Genap :", i);
  } else {
    console.log("Ganjil :", i);
  }
}
