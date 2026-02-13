// ## Soal 2. Melakukan Looping Menggunakan For

// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

console.log("LOOPING MAJU")
for(let i = 1; i < 16; i++){
  console.log(`looping maju ke-${i} I LOVE CODING`)
}

console.log("/-------- break ----------/")

console.log('LOOPING MUNDUR')
for(let j = 16; j > -1; j--){
  console.log(`looping mundur ke-${j} I LOVE PYTHON`)
}