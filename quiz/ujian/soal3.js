//Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu 
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. 
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

function konversiMenit(menit) {
    let varJam = 0;
    while (menit >= 60){
        varJam += 1;
        menit = menit - 60;
    }
    menit = String(menit);

    if (menit.length === 1) {
        return `${varJam}:0${menit}`;
    } else if (menit.length === 2) {
        return `${varJam}:${menit}`;
    }
}
  
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00