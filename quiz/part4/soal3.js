let name = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming";

let fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); 

function processSentence(name,age,address,hobby) {
    return `Name saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`;
}