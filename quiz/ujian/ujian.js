// //soal 1
// function bandingkanAngka(angka1, angka2) {
//     //code disini
//     if(angka1 == angka2) return -1;
//     return angka2 > angka1;
//   }

//     // TEST CASES
//     console.log(bandingkanAngka(5, 8)); // true
//     console.log(bandingkanAngka(5, 3)); // false
//     console.log(bandingkanAngka(4, 4)); // -1
//     console.log(bandingkanAngka(3, 3)); // -1
//     console.log(bandingkanAngka(17, 2)); // false

// Soal 2
function balikKata(kata) {
  // you can only write your code here!
  var result = "";
  for (i = kata.length - 1; i >= 0; i--) {
    result += kata[i];
  }
  return result;
}

// TEST CASES
console.log(balikKata("Hello World and Coders")); // sredoC dna dlroW olleH
console.log(balikKata("John Doe")); // eoD nhoJ
console.log(balikKata("I am a bookworm")); // mrowkoob a ma I
console.log(balikKata("Coding is my hobby")); // ybboh ym si gnidoC
console.log(balikKata("Super")); // repuS

//soal 3
function konversiMenit(menit) {
  // you can only write your code here!
  return Math.floor(menit / 60) + ":" + (menit % 60);
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00

//soal 4
function xo(str) {
  // you can only write your code here!
  var x = 0;
  var o = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] == "x") {
      x++;
      continue;
    }
    o++;
  }

  return x == o;
}

// TEST CASES
console.log(xo("xoxoxo")); // true
console.log(xo("oxooxo")); // false
console.log(xo("oxo")); // false
console.log(xo("xxxooo")); // true
console.log(xo("xoxooxxo")); // true
