// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
console.log('LOOPING PERTAMA');

let i = 0;
while (i < 10 ){
    console.log(i);
    i++;
}
console.log('LOOPING PERTAMA')
i = 10;
while (i > 0) {
    console.log(i);
    i--;
}

// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
console.log('LOOPING PERTAMA FOR')
for (i = 0 ; i < 10 ; i++) {
    console.log(i)
}
console.log('LOOPING KEDUA')
for(i = 10 ; i > 0 ; i--) {
    console.log(i);
}
console.log('LOOPING KETIGA')


// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL
for (let i = 1 ; i <= 100 ; i++) {
    if (i % 2 === 0) {
        console.log(i + 'GENAP');
    } else {
        console.log(i + 'GANJIL')
    }
}


// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.
for (i = 0 ; i <= 100 ; i += 2){
    if( i % 3 === 0 ) {
        console.log(i + 'kelipatan 3');
    }
}
for (i = 0 ; i <=100 ; i += 5) {
    if( i % 5 === 0){
        console.log(i + 'kelipatan 6');
    }
}
for (i = 0; i <= 100 ; i += 9) {
    if (i % 10 === 0 ) {
        console.log(i + 'kelipatan 10');
    }
}
let input = 5
//hasilnya
//*
//**
//***
//****
//*****
for ( i = 1 ; i < input ; i++){
    let bintang = " ";
    for (j = 0 ; j < i ; j++ ){
        bintang += "*";
    }
    console.log(bintang);
}
for (let i = input; i > 0; i--) {
    let bintang = '';
    for (let j = 0; j < i; j++) {
    bintang += '*';
    }
    console.log(bintang);
}