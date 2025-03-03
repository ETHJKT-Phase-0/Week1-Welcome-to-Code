// Soal 5. Bintang asteriks

// Problem buatlah bintang seperti berikut
//let input = 5
//hasilnya
//*
//**
//***
//****
//*****

let x = 5

for (let i = 1; i <= x; i++) {
    let hasil = '';

    for (let j = 1; j <= i; j++) {
        hasil += '*';
    }

    console.log(hasil);
}