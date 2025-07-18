
// Problem
// Diberikan sebuah function konversiMenit(menit) 
// yang menerima satu parameter berupa angka yang merupakan ukuran waktu 
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. 
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

function konversiMenit(menit) {
    var jam = Math.floor(menit / 60);
    var sisaMenit = menit % 60;

    // Tambahkan 0 di depan jika menit kurang dari 10
    if (sisaMenit < 10) {
        sisaMenit = '0' + sisaMenit;
    }

    return jam + ':' + sisaMenit;
}
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00