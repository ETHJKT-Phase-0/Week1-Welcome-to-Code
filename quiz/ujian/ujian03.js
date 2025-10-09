// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut.
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

function convertDigits(sisa) {
  if (sisa < 10) {
    return `0${sisa}`;
  } else {
    return sisa;
  }
}

function konversiMenit(menit) {
  // you can only write your code here!
  const jam = Math.floor(menit / 60);
  const sisaMenit = convertDigits(menit % 60);
  const result = `${jam}:${sisaMenit}`;
  return result;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
