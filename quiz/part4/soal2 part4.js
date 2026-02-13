```js
// Buatlah sebuah fungsi bernama calculateMultiply(), yang mengembalikan nilai berupa hasil kali dari 
// dua parameter yang dikirim.

//bikin fungsinya disini

let num1 = 1
let num2 = 2

let hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian);

// ------------------------------------
console.log('')
// -----------------------------------
```;
let num1 = 1;
let num2 = 2;
function calculateMultiply() {
  // ini menggunakan luar scope function atau global
  console.log(num1 + num2);
}

function calculateMultiply2(num1, num2) {
  // ini menggunakan function lokal did dalam parameter
  return num1 * num2;
}
let hasilPerkalian = calculateMultiply2(5, 2);
console.log(hasilPerkalian);
