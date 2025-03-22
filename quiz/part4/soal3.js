// Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi 
// satu kalimat berikut: 
// "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"

//bikin fungsinya disini

function processSentence(nama, umur, alamat, hobi) {  
    return "Nama saya " + nama + ", umur saya " + umur + " tahun, alamat saya di " + alamat + ", dan saya punya hobi yaitu " + hobi + "!";  
}  

let name = "Agus";  
let age = 30;  
let address = "Jln. Malioboro, Yogyakarta";  
let hobby = "gaming";  

let fullSentence = processSentence(name, age, address, hobby);  
console.log(fullSentence);