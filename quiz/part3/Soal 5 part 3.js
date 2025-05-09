// Problem buatlah bintang seperti berikut
let input = 5;
let bintang = 1;
//hasilnya
//*
//**
//***
//****
//*****

while (bintang <= input) {
    let j = 1;
    let output = "";
    while (j <= bintang) {
        output+="*";
        j++;
    }
    console.log(output);
    bintang++;
}