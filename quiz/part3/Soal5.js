// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//*****
for(let i=1; i<=input; i++){
    let bintang = "";
    for(let k=1; k<=i; k++){
        bintang += "*";
    }
    console.log(bintang);
}