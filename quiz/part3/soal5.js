/*## Soal 5. Bintang asteriks
```js
// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//*****
```

---*/

let input = 10;
let hasil = "";
for (let i = 0; i < input; i++) {
  hasil += "*";
  console.log(hasil);
}
