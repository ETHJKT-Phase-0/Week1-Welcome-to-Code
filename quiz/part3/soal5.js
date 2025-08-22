//## Soal 5. Bintang asteriks
//```js
// Problem buatlah bintang seperti berikut
//hasilnya
//*
//**
//***
//****
//*****

let input = 5;

let hasil = "";
for (let i = 1; i <= input; i++) {
  // ulangi "*" sebanyak i
  for (let j = 1; j <= i; j++) {
    hasil += "*";
  }
  hasil += "\n"; // pindah baris
}

console.log(hasil);
