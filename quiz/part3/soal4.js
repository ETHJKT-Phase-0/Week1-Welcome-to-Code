// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.
console.log("LOOP PERTAMBAHAN 2");
for (let j = 1; j <= 100; j+=2) {
    switch(true) {
        case j % 3 == 0:
            console.log(`${j} kelipatan 3`);
            break;
        default:
            console.log(j);
    }
}
// izin experiment pake switch sir :-)

console.log("\nLOOP PERTAMBAHAN 5");
for (let k = 1; k <= 100; k+=5) {
    if (k % 6 == 0) {
        console.log(`${k} Kelipatan 6`);
    } else {
        console.log(k);
    }
}

console.log("\nLOOP PERTAMBAHAN  9");
for (let w = 1; w <= 100; w+=9) {
    if (w % 10 == 0) {
        console.log(`${w} Kelipatan 10`);
    } else {
        console.log(w)
    }
}