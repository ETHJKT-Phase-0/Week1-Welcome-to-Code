// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//*****

let a = 5
let d = ""
for (let b = 1; b <= a; b++) {
    for (let c = 0; c < b; c++) {
        d += "*";
    }
    d += "\n";
}
console.log(d);