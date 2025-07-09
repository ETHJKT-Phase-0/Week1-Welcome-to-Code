// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//*****



let bintang = ''
 
for( i = 1; i<=5; i++){
    for (let z = 1; z<=i; z++){
        bintang += "*";
    }
    bintang += "\n";

}
    console.log(bintang)

