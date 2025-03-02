let nama = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming";

let fullSentence = processSentences(nama, age, address, hobby);

function processSentences(nama, age, address, hobby){
    

    return "Hallo nama saya " + nama + " dan saya berumur "+ age+ " tahun, dan saya tinggal di "+address+ " dan saya memiliki hobi yaitu " + hobby;
    
//     return "Hallo nama saya " + nama + " dan saya berusia "+ age+ "tahun dan sekarang saya tinggal di "+ address + " dan saya adalah seorang" + hobby+ " handal.";
}

console.log(fullSentence);
