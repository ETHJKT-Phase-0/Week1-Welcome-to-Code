// ## Soal 5. Bintang asteriks

// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//*****

// pakai method repeat
for(i = 0; i <= input; i++){
  console.log('*'.repeat(i))
}

console.log("/-------- break ----------/");

for(j = 0; j <= input; j++){
    bintang = ''
  for(l = 0; l <= j; l++){
    bintang += '*'
  }
  console.log(bintang)
}