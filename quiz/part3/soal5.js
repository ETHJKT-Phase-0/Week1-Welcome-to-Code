// Problem buatlah bintang seperti berikut
let input = 5;
let bintang = ""
//hasilnya
//*
//**
//***
//****
//*****
for (let row = 1; row <= 5; row++) {
  for (let col = 1; col <= row; col++) {
    bintang += "*"
  }
  bintang += "\n"
}
console.log(bintang)
