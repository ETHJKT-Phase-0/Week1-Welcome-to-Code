// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

for (a = 0; a < 100 ; a += 2){
    if (a % 3 == 0){
        console.log(`${a} kelipatan 3`);
    }
}

console.log("");

for (a = 0; a < 100 ; a += 5){
    if (a % 6 == 0){
        console.log(`${a} kelipatan 6`);
    }
}

console.log("");

for (a = 0; a < 100 ; a += 9){
    if (a % 10 == 0){
        console.log(`${a} kelipatan 10`);
    }
}