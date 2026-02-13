
// soal 1
const shoutOut = () => 'Hello World!';

console.log(shoutOut())


// soal 2
const calculateMultiply = (n1,n2) => n1 * n2;
let num1 = 1
let num2 = 2

let hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian);


// soal 3
const processSentence = (name,age, address, hobby) => {
    return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`
};

let name = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming";


console.log(processSentence(name,age,address,hobby));