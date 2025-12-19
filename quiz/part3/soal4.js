// ## Soal 4. counter kelipatan
// js
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

//Pertambahan 2, kelipatan 3
let counter2 = 1;
console.log("Kelipatan 3");
while (counter2 <= 100) {
  if (counter2 % 3 === 0) {
    console.log(`${counter2} kelipatan 3`);
  }
  counter2 += 2;
}

// Pertambahan 5, kelipatan 6
console.log("Kelipatan 6");
for (let counter5 = 1; counter5 <= 100; counter5 += 5) {
  if (counter5 % 6 === 0) {
    console.log(`${counter5} kelipatan 6`);
  }
}

//Pertambahan 9, kelipatan 10 ---
let counter9 = 1;
console.log("Kelipatan 10");
while (counter9 <= 100) {
  if (counter9 % 10 === 0) {
    console.log(`${counter9} kelipatan 10`);
  }
  counter9 += 9;
}
