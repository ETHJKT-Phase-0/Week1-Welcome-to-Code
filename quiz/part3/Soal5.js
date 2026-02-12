//Soal 5
// Problem buatlah bintang seperti berikut

//hasilnya
//*
//**
//***
//****
//*****

let input = 5, star='';
for(var i=0; i <= input; i++) {
 for(var j=0; j < i; j++) {
  star +='*';
 }
  star +="\n";
}
console.log(star);
