// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

// code
console.log("Looping pertama");
// initialize value, i = 1
// while condition are meet, increase 2 step up to 100
for (let i = 1; i <= 100; i += 2) {
    // if the result from modulus 3 are 0
    if (i % 3 === 0) {
        // print kelipatan 3
        console.log(`${i} kelipatan 3`);
    }
}

console.log("Looping kedua");
// initialize value, i = 1
// while condition are meet, increase 5 step up to 100
for (let k = 1; k <= 100; k += 5) {
    // if the result from modulus 6 are 0
    if (k % 6 === 0) {
        // print kelipatan 6
        console.log(`${k} kelipatan 6`);
    }
}

console.log("Looping ketiga");
// initialize value, i = 1
// while condition are meet, increase 9 step up to 100
for (let m = 1; m <= 100; m += 9) {
    // if the result from modulus 10 are 0
    if (m % 10 === 0) {
        // print kelipatan 10
        console.log(`${m} kelipatan 10`);
    }
}