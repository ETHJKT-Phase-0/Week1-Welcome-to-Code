// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

for (let a = 1; a <= 100; a +=2) {
    if (a % 3===0) {
        console.log(`${a} GANJIL kelipatan 3`)
    }
}

for (let b = 1; b <= 100; b +=5) {
    if (b% 6===0) {
        console.log(`${b} GENAP kelipatan 6`)
    }
}

for (let c = 1; c <= 100; c +=9) {
    if (c % 10===0) {
        console.log(`${c} GENAP kelipatan 10`)
    }
}
