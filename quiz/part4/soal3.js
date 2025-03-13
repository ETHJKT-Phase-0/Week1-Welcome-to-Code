/**
 *@ Author: Ulkaboos a.k.a Julius  
 */

let name = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming";

let fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);

function processSentence(_name, _age, _address, _hobby){
  return `Nama saya ${_name}, umur saya ${_age} tahun, alamat saya di ${_address}, dan saya punya hobby yaitu ${_hobby}!`;
}