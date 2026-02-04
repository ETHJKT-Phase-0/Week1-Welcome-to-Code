// Soal 1

const shoutOut = () => {
  return "Halo Function!";
};

console.log(shoutOut());

// Soal 2
let num1 = 1;
let num2 = 2;

const calculateMultiply = (a, b) => {
  return a * b;
};

let hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian);

// Soal 3
let nama = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming";

const processSentence = (nama, age, address, hobby) => {
  return `Nama saya ${nama}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`;
};

let fullSentence = processSentence(nama, age, address, hobby);
console.log(fullSentence);
