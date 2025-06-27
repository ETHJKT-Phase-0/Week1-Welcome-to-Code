let nama = "agus";
let age = "30";
let address = "jl.malioboro, jogja";
let hobby = "gaming";

function processSentence(nama,age,address,hobby){
    return "nama saya " + nama + " ,umur saya " + age + " ,alamat saya di " + address + 
    " ,saya punya hobby yaitu " + hobby
}

let fullSentence = processSentence(nama,age,address,hobby);
console.log(fullSentence)