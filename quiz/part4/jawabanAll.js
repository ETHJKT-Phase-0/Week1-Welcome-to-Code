// Tugas 1
// Buatlah sebuah fungsi bernama shoutOut(), yang mengembalikan nilai berupa "Halo Function!",
// yang kemudian akan ditampilkan di console.

//GUE SINGKAT AJA BANG MAAP GA ADA VALIDASINYA BIAR CEPET WKKWK

//bikin fungsinya disini

function shoutOut() {
  return "Halo Function!";
}

console.log(shoutOut());

// ------------------------------------
console.log("");
// ------------------------------------

// Buatlah sebuah fungsi bernama calculateMultiply(), yang mengembalikan nilai berupa hasil kali dari
// dua parameter yang dikirim.

//bikin fungsinya disini

let num1 = 1;
let num2 = 2;

function calculateMultiply(angka1, angka2) {
  return angka1 * angka2;
}

let hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian);

// ------------------------------------
console.log("");
// -----------------------------------

// Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi
// satu kalimat berikut:
// "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"

//bikin fungsinya disini

let name = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming";

function processSentence(nama, usia, alamat, hobby) {
  return `Nama saya ${nama}, umur saya ${usia} tahun, alamat saya di ${alamat}, dan saya punya hobby yaitu ${hobby}!`;
}

let fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"
