function processSentence(name, age, address, hobby) {
    return `Nama saya ${name}\numur saya ${age} tahun\nalamat saya di ${address}\ndan saya punya hobby yaitu ${hobby}!\n`;
}

let name = "MASTER";
let age = '1.000.000.000';
let address = "PELANET MARS";
let hobby = "MEMBUAT SINTAX";

let fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"

