// Soal 1
function shoutOut() {
  console.log("Hello Fuction");
}

shoutOut();

// Soal 2
let num1 = 8;
let num2 = 2;
function calculateMultiply() {
  return num1 * num2;
}

let hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian);

// Soal 3
function processSentence(name, age, address, hobby) {
    console.log(`Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`)
}

let name = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming";

let fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence);
