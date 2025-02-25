// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

console.log("Looping Pertama");

let maju = 1;

while (maju <= 5) {
  console.log("Looping maju ke -" + maju);
  maju++;
}

console.log("\nLooping Kedua");

let mundur = 5;

while (mundur >= 1) {
  console.log("Looping mundur ke -" + mundur);
  mundur--;
}
