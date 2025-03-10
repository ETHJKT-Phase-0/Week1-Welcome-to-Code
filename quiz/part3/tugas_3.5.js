// ## Soal 5. Bintang asteriks
// ```js
// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//*****
// ```

for ( let i = 1; i <= input; i++) {
    let stars = "";
    for( let f = 1; f <= i; f++) {
        stars += "*";
    }
    console.log(stars);
}