// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//*****

let pola = ""
for(let i = 1; i <= input; i++){
    for(let j = 1; j <= i; j++){
        pola += "*";
    }
    pola += "\n";
}
console.log(pola)