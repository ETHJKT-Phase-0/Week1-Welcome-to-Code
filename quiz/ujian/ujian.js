//Soal1 banding angka
function bandingkanAngka(angka1, angka2) {
   return (angka2 > angka1) ? true: (angka2 == angka1) ? -1: false;
}
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false

//soal2 Balik Kata
function balikKata(kata, nama='') {
    for(var i = kata.length;i--;) {      
      nama += kata[i];
    }
    return nama;
}

console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS

//Konversi menit
function konversiMenit(menit, jam=60) {
    var jam_ = (parseInt(menit/jam)) == 0?"00":parseInt(menit/jam);
    var tMenit = ((menit - (jam * jam_)) < 10) ? "0"+(menit - (jam * jam_)):menit - (jam * jam_);
    return jam_+":"+tMenit;
}
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00

//soal 4
function xo(value) {
  let x =0;
  let o =0;
  for(var i=0; i < value.length; i++) {
    if(value[i] == 'x') { x++; } else { o++; };
  }
   return x == o ? true : false;
}
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true