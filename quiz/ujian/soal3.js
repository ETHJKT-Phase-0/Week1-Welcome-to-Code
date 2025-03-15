// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu 
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. 
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

function konversiMenit(menit) {
    let jam = Math.floor(menit / 60);
    let sisaMenit = menit % 60;
    sisaMenit = String(sisaMenit).padStart(2, '0'); 
    return jam + ":" + sisaMenit;
} 

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00

// note buat belajar
//Math.floor(menit / 60) → Menghitung jam
//Jika menit = 63, maka Math.floor(63 / 60) = 1.
//Jika menit = 124, maka Math.floor(124 / 60) = 2.
//menit % 60 → Menghitung sisa menit
//63 % 60 = 3, jadi sisa menitnya adalah 3.
//124 % 60 = 4, jadi sisa menitnya adalah 4.
//String(sisaMenit).padStart(2, '0') → Pastikan 2 digit
//Jika sisaMenit = 3, maka jadi "03".
//Jika sisaMenit = 4, maka jadi "04".
//Jika sisaMenit = 53, tetap "53".