// Problem buatlah bintang seperti berikut
let input = 5;
//hasilnya
//*
//**
//***
//****
//*****

for (let i = 1; i <= input; i++){
    asterisks = ""; 
    for(let i2 = 1; i2 <= i; i2++ ){
        asterisks += "*";
    }
    console.log(asterisks);
}