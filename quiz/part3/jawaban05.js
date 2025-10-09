// Problem buatlah bintang seperti berikut
let input = 5;
//hasilnya
//*
//**
//***
//****
//*****

let result = "";
for (i = 0; i < input; i++) {
  for (j = 0; j <= i; j++) {
    result += "*";
  }
  result += "\n";
}

console.log(result);
