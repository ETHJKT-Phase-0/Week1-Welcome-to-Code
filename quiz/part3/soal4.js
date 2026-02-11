// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.



console.log("KELIPATAN 3")
for (let counter = 1; counter <= 100; counter += 2) {
    if (counter % 3 === 0){
        console.log(counter + " Kelipatan 3")
    }
}

console.log("KELIPATAN 6")
for (let counter = 1; counter <= 100; counter += 5) {
    if (counter % 6 === 0){
        console.log(counter + " Kelipatan 6")
    }
}

console.log("KELIPATAN 10")
for (let counter = 1; counter <= 100; counter += 9) {
    if (counter % 10 === 0){
        console.log(counter + " Kelipatan 10")
    }
}
