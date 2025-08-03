function processSentence(namae, age, address, hobby) {
  return `nama saya ${namae}, umur saya ${age} tahun, alamat saya di ${address}, dan hobi saya yaitu, ${hobby}`;
}

//note: nama untuk variable name nya gw ganti jadi "namae" karena "name" sudah deprecated

let namae = "Rafli";
let age = 25;
let address = "Jl. Gunung Pandau, Paringin";
let hobby = "Menulis";

 let fullSentence = processSentence(namae, age, address, hobby);
 console.log(fullSentence);