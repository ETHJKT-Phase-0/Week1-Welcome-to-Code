/**
 * ## Soal 5. Bintang asteriks
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
 */

let input = 5
for (let i = 0; i <= input; i++) {
    let bintang = ''
    for (let j = 0; j < i; j++) {
        bintang += '*'
        }
        console.log(bintang)
        }