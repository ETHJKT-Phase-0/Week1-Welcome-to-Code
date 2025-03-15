// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//*****

let pattern = "";
for (let i = 1; i <= 5; i++) {           // Loop baris
  for (let j = 1; j <= i; j++) {         // Loop kolom (bintang per baris)
    pattern += "*";                      // btw ini dapet nya dari modulo nested loop di study materials
  }                                      // asli nya mah gw gak ngerti tapi cuman masukin angka doang
  pattern += "\n";                       //by:perdana (danaxcb)
}
console.log(pattern);