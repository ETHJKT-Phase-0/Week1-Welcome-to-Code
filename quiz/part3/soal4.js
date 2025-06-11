console.log("LOOPING PERTAMA, kelipatan 3 dengan pertambahan 2");
console.log('------------------');

for(x = 0; x < 100; x+=2) {
    if ((x+1) % 3 === 0) {
        console.log(`angka ${x + 1} kelipatan 3`);
    }
}

console.log("\n\nLOOPING KEDUA, kelipatan 6 dengan pertambahan 5");
console.log('------------------');

for(x = 0; x < 100; x+=5) {
    if ((x+1) % 6 === 0) {
        console.log(`angka ${x + 1} kelipatan 6`);
    }
}

console.log("\n\nLOOPING KETIGA, kelipatan 10 dengan pertambahan 9");
console.log('------------------');

for(x = 0; x < 100; x+=9) {
    if ((x+1) % 10 === 0) {
        console.log(`angka ${x + 1} kelipatan 10`);
    }
}