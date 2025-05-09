// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2,
//  kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

//let angka = 1;

while (angka <= 100) {
    if (angka % 3 === 0){
        console.log(angka + " Adalah kelipatan 3 dengan pertambahan 2");
    }
    angka +=2;
}
for (let angka2 = 1; angka2 <= 100; angka2 += 5) {
    if (angka2 % 6 === 0) {
        console.log(angka2 + " Adalah kelipatan 6 dengan pertambhan 5")
    }
    
}
for (let angka3 = 9; angka3 <= 100; angka3 += 10) {
    if (angka3 % 9 === 0) {
        console.log(angka3 + " Adalah kelipatan 9 dengan pertambahan 10");
    }
    
}