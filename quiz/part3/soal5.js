// Soal 5. Bintang asteriks

// Problem buatlah bintang seperti berikut
// let input = 5
//hasilnya
//*
//**
//***
//****
//*****

let bintang = "";
let input = 10;
for(let i=0; i<=input; i++){
    for(let j=0; j<i; j++){
        bintang+="*";
    }
    bintang+="\n";
}
console.log(bintang);

// SOAL 5 DONE