// Tugas 1
// Buatlah sebuah fungsi bernama shoutOut(), yang mengembalikan nilai berupa "Halo Function!", 
// yang kemudian akan ditampilkan di console.

//bikin fungsinya disini

console.log(`Soal 1!`)
function shoutOut() {
    return ("Hallo function!!");

}
// ------------------------------------
console.log(shoutOut())
// ------------------------------------

// Buatlah sebuah fungsi bernama calculateMultiply(), yang mengembalikan nilai berupa hasil kali dari 
// dua parameter yang dikirim.

//bikin fungsinya disini


console.log(`\nSoal 2!`)
let num1 = 1
let num2 = 2
// ------------------------------------
function calculateMultiply() {
    return (num1 * num2)
}
let hasilperkalian = calculateMultiply()

console.log(hasilperkalian)
// -----------------------------------

// Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi 
// satu kalimat berikut: 
// "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"

//bikin fungsinya disini

console.log(`\nSoal 3!!`)
let name = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming";

function processSentence() {
    return (`Nama saya ${name}, umur saya ${age}, alamat saya di ${address}, dan saya punya hobby ${hobby}`)
}

let fullSentence = processSentence()
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"