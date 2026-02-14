// ## Soal 3. Angka Ganjil dan Genap

// ```js
// // Hint: kamu akan menggunakan kondisional juga di kasus ini.

// // Problem
// // Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// // Di dalam perulangan, periksa setiap angka counter:

// // Apabila angka counter adalah angka genap, tuliskan GENAP
// // Apabila angka counter adalah angka ganjil, tuliskan GANJIL
for (let genap = 1; genap < 100; genap++) {
  if (genap % 2 == 0) {
    console.log("ANGKA GENAP", genap);
  }
}
for (let ganjil = 1; ganjil < 100; ganjil++) {
  if (ganjil % 2 == 1) {
    console.log("ANGKA GANJIL ", ganjil);
  }
}
