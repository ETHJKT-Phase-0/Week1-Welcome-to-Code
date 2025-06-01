function processSentence(name, age, address, hobby) {
  return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`;
}

let nama = "Ucup";
let age = 19;
let address = "Jln. Pendekar Kaki Lima, Bandung";
let hobby = "tidur";

let fullSentence = processSentence(nama, age, address, hobby);
console.log(fullSentence);
