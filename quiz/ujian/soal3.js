// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu 
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. 
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

function konversiMenit(menit) {
    let waktu_menit = menit % 60;
    // Jika waktu_menit kurang dari 10 maka tambahkan 0 didepan angkanya agar angka dari waktu_menit selalu terlihat 2 digit
    if (waktu_menit < 10) waktu_menit = `0${waktu_menit}`;
    
    let waktu_jam = Math.floor(menit / 60);

    return `${waktu_jam}:${waktu_menit}`;
}
  
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00