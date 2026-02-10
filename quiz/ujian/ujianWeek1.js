// ## Soal 1
// ```js
// // Problem
// // Diberikan sebuah function bandingkanAngka(angka1, angka2) yang menerima dua parameter angka.
// // Function akan me-return nilai true jika angka2 lebih besar dari angka1, dan false jika sebaliknya.
// // Jika kedua angka bernilai sama, function akan me-return -1.

function bandingkanAngka(angka1, angka2) {
  if (angka2 > angka1) {
    return true;
  } else if (angka2 < angka1) {
    return false;
  } else {
    return -1;
  }
}

// TEST CASES
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false
console.log("");

// ## Soal 2
// ```js
// // Problem
// // Diberikan sebuah function balikKata(kata) yang menerima satu parameter berupa string.
// // Function akan me-return kata yang dibalik. Contoh, jika kata adalah "John Doe", function akan me-return "eoD nhoJ".

function balikKata(kata) {
  let balikKata = "";
  for (let i = kata.length - 1; i >= 0; i--) {
    balikKata += kata[i];
  }
  return balikKata;
}

// TEST CASES
console.log(balikKata("Hello World and Coders")); // sredoC dna dlroW olleH
console.log(balikKata("John Doe")); // eoD nhoJ
console.log(balikKata("I am a bookworm")); // mrowkoob a ma I
console.log(balikKata("Coding is my hobby")); // ybboh ym si gnidoC
console.log(balikKata("Super")); // repuS
console.log("");

// ## Soal 3
// ```js

// // Problem
// // Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu
// // dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut.
// // Contoh, jika menit adalah 63, maka function akan me-return "1:03".

function konversiMenit(menit) {
  let jam = Math.floor(menit / 60);
  let minute = menit % 60;

  if (minute < 10) {
    minute = "0" + minute;
  }
  return `${jam}:${minute}`;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
console.log("");

// ## Soal 4
// ```js
// //   Problem
// //   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string.
// //   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
  let x = 0;
  let o = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x") {
      x++;
    } else if (str[i] === "o") {
      o++;
    }
  }
  return x === o;
}

// TEST CASES
console.log(xo("xoxoxo")); // true
console.log(xo("oxooxo")); // false
console.log(xo("oxo")); // false
console.log(xo("xxxooo")); // true
console.log(xo("xoxooxxo")); // true
