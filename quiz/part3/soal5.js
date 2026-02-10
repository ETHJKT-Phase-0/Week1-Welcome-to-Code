// ## Soal 5. Bintang asteriks
// ```js
// Problem buatlah bintang seperti berikut
//hasilnya
//*
//**
//***
//****
//*****

let input = 5;
let star = '';

for (let i = 1; i <= input; i++) {
    for (j = 1; j <= i; j++) {
        star += '*'
    }
    star += "\n";
}
console.log(star);
