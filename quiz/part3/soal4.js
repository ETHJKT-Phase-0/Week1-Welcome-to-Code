// ## Soal 4. counter kelipatan
// ```js
// // Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// // Pada 3 perulangan baru ini periksa setiap angka counter:

// // Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// // Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// // "3 kelipatan 3"dan seterusnya.
// ```

console.log('====================')
for(let i = 1; i < 100; i += 2) {
    if(i % 3 === 0) {
        console.log(i, 'kelipatan 3')
    } else {
        console.log(i);
    }
}
console.log('====================\n')

console.log('====================')
for(let j = 1; j <= 100; j +=5) {
    if(j % 6 === 0) {
        console.log(j, 'kelipatan 6')
    } else {
        console.log(j);
    }
}
console.log('====================\n')

console.log('====================')
for(let a = 1; a <= 100; a += 9) {
    if(a % 10 === 0) {
        console.log(a, 'keliapatan 10')
    } else {
        console.log(a);
    }
}
console.log('====================')

