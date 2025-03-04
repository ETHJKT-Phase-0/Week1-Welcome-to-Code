
// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu 
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. 
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".
/* Algoritma
    1. bagi menit dengan 60, lalu bulatkan nilainya, simpan pada sebuah variabel
    2. sisa bagi (modulus) dengan 60, maka akan muncul hasilnya sisa bagi dari 60, simpan dalam sebuah variabel
    3. buat sebuah variabel untuk memformat angkamenit
    5. buat pengkondisian jika nilai dari angkamenit kurang dari 10 maka tambahkan angka 0 pada awalan, jika tidak jangan
    6. return hasil dari angkajam dan formatmenit
*/


function konversiMenit(menit) {
    let angkaJam = Math.floor(menit / 60);
    let angkaMenit = menit % 60;

    let formatMenit;
    if(angkaMenit < 10){
        formatMenit = `0` + angkaMenit;
    } else {
        formatMenit = angkaMenit;
    }

    return`${angkaJam}:${formatMenit}`;
}

  
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00