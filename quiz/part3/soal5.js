// Problem buatlah bintang seperti berikut
//hasilnya
//*
//**
//***
//****
//*****

let input = "";
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        input += "*";
    }
    input += "\n";
}
console.log(input);

// SOAL SELESAI