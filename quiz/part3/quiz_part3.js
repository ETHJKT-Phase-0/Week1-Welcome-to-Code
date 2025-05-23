// soal 1
console.log('LOOPING WHILE\n');

let wCounter = 0, wInc = 0, wDec = 0;
while (wCounter < 5) {
    if(++wCounter % 2 === 1) {
        wInc++;
        console.log('Looping maju');
    } else {
        wDec++;
        console.log('Looping mundur');
    }
}
console.log(`Maju: ${wInc}x\nMundur: ${wDec}x`);



// soal 2
console.log('\nLOOPING FOR')

let counter = 0, a = 0, b = 0;

for(let i = 0; i < 5; i++) {
    if(++counter % 2 === 1) {
        a++;
        console.log('Looping maju');
    } else {
        b++;
        console.log('Looping mundur');
    }
}
console.log(`Maju: ${a}x\nMundur: ${b}x`);



// soal 3
console.log('\nGENAP GANJIL');

for(let i = 0; i < 100 ; i ++) {
    if(i % 2 === 0) {
        console.log(`${i} GENAP`);
    } else {
        console.log(`${i} GANJIL`);
    }
}


// soal 4
console.log('\nCOUNTER KELIPATAN');

let i = 1;
for(i ; i < 100; i += 2) {
    if(i % 3 === 0) {
        console.log(`${i} Kelipatan 3`);
    }
}


for (let i = 1; i <= 100; i += 5) {
    if (i % 6 === 0) {
        console.log(`${i} kelipatan 6`);
    }
}

for (let i = 1; i <= 100; i += 9) {
    if (i % 10 === 0) {
        console.log(`${i} kelipatan 10`);
    }
}

// soal 5
console.log('\nBINTANG ASTERIKS');
let input = 5
let star = '';

for(let i = 0; i < input; i++)  {
    star += '*';
    console.log(star)
}
