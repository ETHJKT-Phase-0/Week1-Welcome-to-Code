// Problem buatlah bintang seperti berikut
let input = 5;
//hasilnya
//*
//**
//***
//****
//*****
for (let i = 1; i <= input; i++) {
  let star = "";
  for (let j = input; j >= i; j--) {
    star += "*";
  }
  console.log(star);
}
