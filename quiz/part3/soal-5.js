// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//*****

// initialize empty string
let x = "";

// initialize looping for fill the string with *
for (let i = 1; i <= input; i++) {
    // create inner loop for
    for (let j = 0; j <= i; j++) {
        x += "*"
    }
    x += '\n';
}

console.log(x);