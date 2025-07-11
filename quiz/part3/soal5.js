// ## Soal 5. Bintang asteriks
// ```js
// // Problem buatlah bintang seperti berikut
// let input = 5
// //hasilnya
// //*
// //**
// //***
// //****
// //*****
// ```

let count = 5;

for (let i = 1; i <= count ; i ++){
    let space = "";
for (let j = 1 ; j <= i ; j++){
    space += "*"
}
console.log(space)
}

//Donee