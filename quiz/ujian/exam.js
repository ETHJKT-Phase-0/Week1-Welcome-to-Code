// Soal 1
function bandingkanAngka(angka1, angka2) {
  if (angka1 == angka2) {
    return -1;
  }
  return angka1 < angka2 ? true : false;
}

console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false

// Soal 2
function balikKata(kata) {
  let result = "";
  for (let i = kata.length - 1; i >= 0; i--) {
    result += kata[i];
  }
  return result;
}

console.log(balikKata("Hello World and Coders")); // sredoC dna dlroW olleH
console.log(balikKata("John Doe")); // eoD nhoJ
console.log(balikKata("I am a bookworm")); // mrowkoob a ma I
console.log(balikKata("Coding is my hobby")); // ybboh ym si gnidoC
console.log(balikKata("Super")); // repuS

// Soal 3
function konversiMenit(menit) {
  return `${(menit - (menit % 60)) / 60}:${menit % 60 ? (menit % 60 < 10 ? "0" + (menit % 60) : menit % 60) : "00"}`;
}

console.log(konversiMenit(600)); // 1:00
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00

// Soal 4
function xo(str) {
  let countX = 0;
  let countO = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "x") {
      countX++;
    } else if (str[i].toLowerCase() === "o") {
      countO++;
    }
  }

  return countX === countO;
}

console.log(xo("xoxoxo")); // true
console.log(xo("oxooxo")); // false
console.log(xo("oxo")); // false
console.log(xo("xxxooo")); // true
console.log(xo("xoxooxxo")); // true
