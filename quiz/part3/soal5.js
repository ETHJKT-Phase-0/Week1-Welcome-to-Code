// Soal 5. Bintang asteriks
// ```js
// // Problem buatlah bintang seperti berikut
// let input = 5
// //hasilnya
// //*
// //**
// //***
// //****
// //*****
let bintang = "";
for (let i = 1; i <= 5; i++) {
  // Loop baris
  for (let j = 1; j <= i; j++) {
    // Loop kolom (bintang per baris)
    bintang += "*";
  }
  bintang += "\n";
}
console.log(bintang);
