// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

let numberMaju = 0;
let numberMundur = 10;
console.log("LOOPING PERTAMA");
while (numberMaju < 10) {
  numberMaju++;
  console.log(`Hitung maju: ${numberMaju}`);
}

console.log("                     ");
console.log("Break");
console.log("                     ");

console.log("LOOPING KEDUA");
while (numberMundur > 0) {
  console.log(`Hitung mundur: ${numberMundur}`);
  numberMundur--;
}
