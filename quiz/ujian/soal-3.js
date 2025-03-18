// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut.
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

function konversiMenit(menit) {
    // you can only write your code here!

    // process for hour section
    let hour = menit;

    // case, if hour are less than 59
    // hour = 0
    if (hour <= 59) {
        hour = 0;
        // else, if hour are more than 59
        // hour = minutes / 60 with fixed digits
    } else {
        hour /= 60;
        hour = hour.toFixed(0);
    }

    // process for minutes section
    // minutes = menit mod 60
    let minutes = menit % 60;
    // case, if minutes are less than 10
    if (minutes < 10) {
        // ubah bentuk menit seperti ini 01 - 09
        minutes = `0${minutes}`;
    }

    // combine hour and minutes
    return `${hour}:${minutes}`;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00