// ## Soal 3. Angka Ganjil dan Genap

// ```js
// // Hint: kamu akan menggunakan kondisional juga di kasus ini.

// // Problem
// // Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// // Di dalam perulangan, periksa setiap angka counter:

// // Apabila angka counter adalah angka genap, tuliskan GENAP
// // Apabila angka counter adalah angka ganjil, tuliskan GANJIL
// ```
for (let i = 1; i < 100; i++) {
  i += 1;
  console.log(`GENAP ${i}`)
}
console.log()
for (let j = 1; j < 100; j++) {
  j += 2;
  console.log(`GENAP ${j}`)
}