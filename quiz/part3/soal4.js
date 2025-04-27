// ## Soal 4. counter kelipatan
// ```js
// // Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// // Pada 3 perulangan baru ini periksa setiap angka counter:

// // Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// // Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// // "3 kelipatan 3"dan seterusnya.
// ```

for (let i = 1; i < 100; i++) {
  i += 2;
  console.log(`Kelipatan 3 ${i}`)
}
console.log()
for (let j = 1; j < 100; j++) {
  j += 5;
  console.log(`Kelipatan 6 ${j}`)
}
console.log()
for (let k = 1; k < 100; k++) {
  k += 9;
  console.log(`Kelipatan 10 ${k}`)
}