// Soal 3. Angka Ganjil dan Genap


// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

//Pake Bitwise hehe
/*
for (let i = 1; i <=100; i++) {
    if (i & 1 ===1) {
        console.log('Angka ' + i + ' GANJIL');
    } else {
        console.log('Angka ' + i + ' GENAP');
    }
}
*/

//Pake Modulus

for (let i = 1; i <=100; i++) {
    if (i %2 ===1) {
        console.log('Angka ' + i + ' GANJIL');
    } else {
        console.log('Angka ' + i + ' GENAP');
    }
}
