// Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi 
// satu kalimat berikut: 
// "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"

//bikin fungsinya disini

let name = "Bin";
let age = 15;
let address = "jln,pulau rintis";
let hobby = "bulu tangkis";

function processSentence(name,age,address,hobby) {
    return "Nama saya " + name + ",umur saya " + age + "Tahun, alamat saya di " + address + ", dan saya punya hobby yaiut " + hobby
}

let fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"
