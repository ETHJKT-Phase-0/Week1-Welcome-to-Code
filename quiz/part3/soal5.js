// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//*****

for (let i = 1; i <= input; i++) {
    let bintang = '';
    for (let f = 1; f <= i; f++) {
        bintang += '*';
    }
    console.log(bintang);
}