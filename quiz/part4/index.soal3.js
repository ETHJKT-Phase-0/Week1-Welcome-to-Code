console.log("====================================");
console.log("===============Soal 3===============");
// Soal 3
let name = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming";

function processSentence(name, age, address, hobby) {
  return `Nama saya ${name}, umur saya ${age}, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`;
}

let fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence);
