// ## Soal 4. counter kelipatan

// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

for (let i = 0; i <= 100; i += 2) {
    // console.log(i % 3 === 0 ? `${i} kelipatan 3` : i) 
    if(i % 3 === 0) console.log(`${i} kelipatan 3`)
}

console.log(" ".repeat(100));

for (let i = 0; i <= 100; i += 5) {
    // console.log(i % 6 === 0 ? `${i} kelipatan 6` : i) 
    if(i % 6 === 0) console.log(`${i} kelipatan 6`)
}

console.log(" ".repeat(100));

for (let i = 0; i <= 100; i += 9) {
    // console.log(i % 10 === 0 ? `${i} kelipatan 10` : i) 
    if(i % 10 === 0) console.log(`${i} kelipatan 10`)
}