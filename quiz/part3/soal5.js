// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//*****

var s = "";
for(var i = 0; i < input; i++) {
    for(var j = 0; j <= i; j++) {
        s+="*";
    }
    s += "\n";
}
console.log(s);