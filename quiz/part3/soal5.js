// Problem buatlah bintang seperti berikut
let input = 5;
let hasil = '';
//hasilnya
//*
//**
//***
//****
//*****

for (i = 0; i < input; i++){
    for (j = 0; j <= i; j++){
        hasil += '* ';
    }
    hasil += '\n';
}
console.log(hasil);