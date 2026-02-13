function processSentence(name, age, address, hobby){
    return `Halo, name saya ${name}, saya berusia ${age} tinggal di ${address}, dan hobby saya adalah ${hobby}`;
}

name = "Agus Pedas";
age = 30;
address = "Jln. Malioboro, Yogjakarta";
hobby = "gaming";

let fullSentence = processSentence(name, age, address, hobby);

console.log(fullSentence);