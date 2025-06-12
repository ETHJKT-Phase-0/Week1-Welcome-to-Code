// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//*****

var b = " ";
for(let n = 0; n < input; n++){
    for (let m = 0; m <= n; m++){
        b += "*";
    }
    b += "\n";
}

console.log(b)
