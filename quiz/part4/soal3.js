// Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi 
// satu kalimat berikut: 
// "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"

//bikin fungsinya disini
function processSentence(name, age, address, hobby){
    return `Nama saya ${name},`+` umur saya ${age} tahun,`+` alamat saya di ${address},`+ `dan saya punya hobby yaitu ${hobby}.`;
}
let name = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming!";

let fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); 

//Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"
`
function buatJus(apel, gula) {
    //return `//Jus ${apel} apel + ${gula} sendok gula 🍎!`;
//}

//console.log(buatJus(5, 2)); // Output: "Jus 5 apel + 2 sendok gula 🍎!"

