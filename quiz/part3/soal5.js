// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//*****

let space = ""
for (i = 1; i <= input; i++) {
    for (j = 1; j <= i; j++) {
        space += "*"
    }
    space += "\n"
}
console.log(space)