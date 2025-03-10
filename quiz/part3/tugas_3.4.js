// ## Soal 4. counter kelipatan
// ```js
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.
// ```

console.log("looping pertama:");
for( i = 1; i <= 100; i += 2 ) {
    if (i % 3 === 0);
    console.log(i + " kelipatan 3");
}

console.log("looping kedua:");
for( f = 1; f <= 100; f += 5 ) {
    if (f % 6 === 0);
    console.log(f + " kelipatan 6");
}

console.log("looping ketiga:");
for( e = 1; e <= 100; e += 9 ) {
    if (e % 10 === 0);
    console.log(e + " kelipatan 10");
}