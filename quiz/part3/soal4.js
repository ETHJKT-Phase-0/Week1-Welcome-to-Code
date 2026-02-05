// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

// Loop 1: increment 2
for (let a = 1; a <= 100; a += 2) {
    if (a % 3 === 0 ) {
        console.log(`${a} adalah kelipatan 3`)
    };
};

console.log('\n')
// Loop 2: increment 5
for (let b = 1; b <= 100; b += 5) {
    if (b % 6 === 0 ) {
        console.log(`${b} adalah kelipatan 6`)
    };
};

console.log('\n')
// Loop 3: increment 9
for (let c = 1; c <= 100; c += 9) {
    if (c % 10 === 0 ) {
        console.log(`${c} adalah kelipatan 10`)
    };
};
