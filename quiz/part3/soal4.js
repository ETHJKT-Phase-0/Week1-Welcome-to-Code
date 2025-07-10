// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

console.log("\nPERULANGAN KELIPATAN 3 DENGAN PERTAMBAHAN 2");
let counter2 = 1;
while (counter2 <= 100) {
  if (counter2 % 3 === 0) {
    console.log(counter2 + ' kelipatan 3');
  }
  counter2 += 2;
}

console.log("\nPERULANGAN KELIPATAN 6 DENGAN PERTAMBAHAN 5");
let counter3 = 1;
while (counter3 <= 100) {
  if (counter3 % 6 === 0) {
    console.log(counter3 + ' kelipatan 6');
  }
  counter3 += 5;
}

console.log("\nPERULANGAN KELIPATAN 10 DENGAN PERTAMBAHAN 9");
let counter4 = 1;
while (counter4 <= 100) {
  if (counter4 % 10 === 0) {
    console.log(counter4 + ' kelipatan 10');
  }
  counter4 += 9;
}
