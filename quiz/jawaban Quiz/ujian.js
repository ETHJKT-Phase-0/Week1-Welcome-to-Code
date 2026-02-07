// Soal 1

function bandingkanAngka(angka1, angka2) {
    if (angka1 < angka2){
        return true
    } else if (angka1 > angka2){
        return false
    } else if (angka1 == angka2){
        return -1
    }
}

  // TEST CASES
  console.log(bandingkanAngka(5, 8)); // true
  console.log(bandingkanAngka(5, 3)); // false
  console.log(bandingkanAngka(4, 4)); // -1
  console.log(bandingkanAngka(3, 3)); // -1
  console.log(bandingkanAngka(17, 2)); // false

// Soal 2
function balikKata(kata) {
    return kata.split("").reverse().join("")
}
  
// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS


// Soal 3
function konversiMenit(menit) {
    let jam =parseInt(menit / 60) 
    sisa = menit % 60

    return jam + ":" + (sisa < 10 ? "0" : "" ) + sisa
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00

// Soal 4
function xo(str) {
    let X = 0
    let O = 0

    for (let char of str ){
        if (char === "o"){
            O++
        } else if (char === "x"){
            X++
        }
    }
    if ( X === O){
        return true
    } else{
        return false
    }
}
  
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true