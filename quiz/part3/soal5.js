// ## Soal 5. Bintang asteriks
// js
// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//*****


let output = "";
for (let i = 1; i <= input; i++) {
for (let j = 1; j <= i; j++) {
output += "*";
}
output += "\n";
}
console.log(output)