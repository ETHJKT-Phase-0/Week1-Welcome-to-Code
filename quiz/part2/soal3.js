/*## Soal 3. Breaking Sentence (Again) using Substring

```js
// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!*/

let word3 = "wow JavaScript is so cool";
let exampleFirstWord3 = word3.substring(0, 3);
let exampleSecondWord3 = word3.substring(4, 14);
let exampleThirdWord3 = word3.substring(14, 17);
let exampleFourthWord3 = word3.substring(17, 20);
let exampleFifthWord3 = word3.substring(20, 25);

console.log("First Word: " + exampleFirstWord3);
console.log("Second Word: " + exampleSecondWord3);
console.log("Third Word: " + exampleThirdWord3);
console.log("Fourth Word: " + exampleFourthWord3);
console.log("Fift Word: " + exampleFifthWord3);
