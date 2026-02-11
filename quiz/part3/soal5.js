// Problem buatlah bintang seperti berikut
let baris = ""
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        baris += "* "
    }
    baris += "\n"
}
console.log(baris)
//hasilnya
//*
//**
//***
//****
//*****