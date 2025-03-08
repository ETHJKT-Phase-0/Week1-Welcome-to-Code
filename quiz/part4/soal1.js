// Tugas 1

function shoutOut() {
  return "Halo Function!";
}

console.log(shoutOut());

// Tugas 2

let num1 = 2;
let num2 = 3;

function calculateMultiPly(a, b) {
  return a * b;
}

let hasilPerkalian = calculateMultiPly(num1, num2);
console.log(hasilPerkalian);

// Tugas 3

function procesSentence(name, age, addres, hobby){
    return `Nama saya ${name}, umur saya ${age} tahun, alamat saya ${addres}, dan saya punya hobby ${hobby}!`
}

let name = "Agus";
let age = 21;
let addres = "jln. Malioboro, Yogyakarta";
let hobby = "gaming";

let fullSentence = procesSentence(name, age, addres, hobby);
console.log(fullSentence)


