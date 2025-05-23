// soal 1
const bandingkanAngka = (a,b) => (b > a ) ? true : (b == a) ? -1 : false; 

console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false


// soal 2
const balikKata = (kata) => {
    let reversed = '';
    for (let i  = 0; i < kata.length ; i++) {
        reversed = kata[i] + reversed;
    }
    return reversed;
}

console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS


const konversiMenit = (menit) => {
    let jam = 0;
    if(menit >= 60) {
        jam = Math.floor(menit / 60);
        menit = menit % 60;
    }
    return `${jam}:${menit < 10 ? '0' + menit : menit}`;
}

console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00


// soal 4
const xo = (str) => {
    let x = 0, o = 0;
    for(let i = 0; i < str.length ; i++) {
        if(str[i] === 'x') {
            x++;
        } else if(str[i] === 'o') {
            o++;
        }
    }
    return x === o ? true : false;
}

console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true