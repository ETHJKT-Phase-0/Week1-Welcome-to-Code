// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu 
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. 
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

function konversiMenit(menit) {
    // you can only write your code here!
    let m = 0;
    let s = 0;
    if (menit >= 60){
        for (let i = 60; i <= menit; i+=60){
            m += 1;
        }
    }if (menit){
        s = menit % 60;
    }

    if (s < 10){
        return `${m}:0${s}`
    } else{
        return `${m}:${s}`
    }
}
  
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00