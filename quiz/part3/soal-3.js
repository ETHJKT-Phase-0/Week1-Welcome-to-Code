// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

// code
// initialize value and boundaries 1 - 100
// if looping condition (smaller or equal to 100), increase the value
for (let i = 1; i <= 100; i++) {
    // if modulus i result are equal to 0
    if (i % 2 === 0) {
        // print GENAP
        console.log(`GENAP - ${i}`);
    } else {
        // if not equal to 0
        // print GANJIL
        console.log(`GANJIL - ${i}`);
    }
}