// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//*****

for (let i = 0; i < input; i++) {
  let baris = '';
  for (let s = 0; s <= i; s++) {
    baris += '*'
  }
  console.log(baris)
};
