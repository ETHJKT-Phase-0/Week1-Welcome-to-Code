// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

var treshold = 100

for (let count = 1; count <= treshold; count += 2){
    if (count % 3 == 0) {
        console.log(`${count} kelipatan 3`)
    } 
}

for (let count = 1; count <= treshold; count += 5){
    if (count % 6 == 0) {
        console.log(`${count} kelipatan 6`)
    } 
}

for (let count = 1; count <= treshold; count += 9){
    if (count % 10 == 0) {
        console.log(`${count} kelipatan 10`)
    } 
}

