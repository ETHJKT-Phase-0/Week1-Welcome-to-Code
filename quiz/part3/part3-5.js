// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//*****
let spasi = ""
for(i = 1;i <= input; i++){
  for(let j = 1; j <= i; j++){
    spasi += "*"
  }
     spasi += "\n"
}
console.log(spasi)