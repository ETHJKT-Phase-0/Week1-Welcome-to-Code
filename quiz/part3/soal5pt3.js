// Problem buatlah bintang seperti berikut
// let input = 5;
//hasilnya
//*
//**
//***
//****
//*****

let bintang = '';
for (let input = 1; input <= 5; input++) {
    for (let output = 1; output <= input; output++) {
    bintang += '*';
    }
    bintang += '\n';
}
console.log(bintang)