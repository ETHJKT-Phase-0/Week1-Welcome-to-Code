//Soal 3
// Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi 
// satu kalimat berikut: 
// "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"
//bikin fungsinya disini

let name = "Rian";
let age = 20;
let address = "Jl. Lampung no1";
let hobby = "Olahraga"

function processSentence() {
    return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobi yaitu ${hobby}!`;
}

let fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence);