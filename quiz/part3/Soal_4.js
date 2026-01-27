// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

let i = 1;

for (i; i <= 100; i++){
    if (i % 6 === 0) {
        console.log(`${i} Kelipatan 6`);
    } else if (i % 3 === 0) {
        console.log(`${i} Kelipatan 3`);
    } else if (i % 10 === 0) {
        console.log(`${i} Kelipatan 10`);
    } 
}