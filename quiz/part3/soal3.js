// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

let counter = 1;

for (counter; counter <= 100; counter++){
    if (counter % 2 === 0){
        let hasil = counter + " Genap";
        console.log(hasil);
    } else {
        let hasil = counter + " Ganjil";
        console.log(hasil);
    }
}