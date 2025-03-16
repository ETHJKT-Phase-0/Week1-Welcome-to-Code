// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//*****
let hasil = "";
console.log("Cara Pertama : ");
for(let i=1;i<=input;i++){
    hasil += "*";
    console.log(hasil);
}

console.log("\nCara Kedua : ");
for(let i=1;i<=input;i++){
    let hasil2 = '';
    for(j=1;j<=i;j++){
        hasil2 += "*";
    }
    console.log(hasil2);
}

