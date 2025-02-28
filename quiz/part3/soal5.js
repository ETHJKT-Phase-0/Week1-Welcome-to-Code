// Problem buatlah bintang seperti berikut
// let input = 5
//hasilnya
//*
//**
//***
//****
//*****

// ini masi bingung sir wkwk

let input = 5
let pattern = '';

for (let i = 0; i < input; i++) {
    for ( let j = 0; j < input -i -1; j++ ) {
        pattern += "*";
        // console.log("i = " + i, "j = " + j)
        console.log(pattern)
  
    }
}
