// Problem buatlah bintang seperti berikut
let input = 5;

for (let i = 1; i <= input; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("*");
  }
  process.stdout.write("\n");
}

//hasilnya
//*
//**
//***
//****
//*****
