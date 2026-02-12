//Soal 3
// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

for(var i=1; i <= 100; i++) {
  if(i % 2 == 0) {
    console.log("Nomer Genap : "+i);
  } else {
    console.log("Nomer Ganjil : "+i);
  }
}
