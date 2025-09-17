/* ## Soal 3. Angka Ganjil dan Genap

```js
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL */

let perulangan = 1,
    max = 100;

while(perulangan <= max){
    if(perulangan % 2 == 0){
        console.log(`angka ${perulangan} adalah angka Genap`)
    } else{
        console.log(`angka ${perulangan} adalah angka Ganjil`)
    }
perulangan++;
}