// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//*****

let pola;

for (let b = 0; b < input; b++) {
    pola = ""
    for (let k = 0; k <= b; k++) {
        pola += "*"
        console.log(k)
    }
    

}
