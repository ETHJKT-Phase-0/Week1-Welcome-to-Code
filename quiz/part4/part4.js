// soal 1
function shoutOut() {
  return "Halo Function!";
}
console.log(shoutOut());

// ------------------------------------
console.log("");
// ------------------------------------
//soal2

function calculateMultiply(num1, num2) {
  return num1 * num2;
}

let num1 = 1;
let num2 = 2;

let hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian);

// ------------------------------------
console.log("");
// -----------------------------------

//soal3
function processSentence(name, age, address, hobby) {
  return name + " " + age + " " + address + " " + hobby;
}

let name = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming";

let fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"
