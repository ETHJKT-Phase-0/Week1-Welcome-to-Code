console.log("====================================");
console.log("===============Soal 1===============");
//soal 1
console.log("LOOPING PERTAMA");
let i = 1;
while (i < 10) {
  console.log(i + " - Menghitung maju");
  i++;
}

console.log("LOOPING KEDUA");
let j = 9;
while (j > 0) {
  console.log(j + " - Menghitung mundur");
  j--;
}

console.log("====================================");
console.log("===============Soal 2===============");
//soal 2
console.log("LOOPING PERTAMA");
for (let i = 1; i < 10; i++) {
  console.log(i + " - Menghitung maju");
}

console.log("LOOPING KEDUA");
for (let j = 9; j > 0; j--) {
  console.log(j + " - Menghitung mundur");
}

console.log("====================================");
console.log("===============Soal 3===============");
//soal 3
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i + " - GENAP");
  } else {
    console.log(i + " - GANJIL");
  }
}

console.log("====================================");
console.log("===============Soal 4===============");
//soal 4
for (let i = 1; i <= 100; i += 2) {
  if (i % 3 === 0) {
    console.log(i + " KELIPATAN 3");
  }
}

console.log("====================================");

for (let i = 1; i <= 100; i += 5) {
  if (i % 6 === 0) {
    console.log(i + " KELIPATAN 6");
  }
}

console.log("====================================");

for (let i = 1; i <= 100; i += 9) {
  if (i % 10 === 0) {
    console.log(i + " KELIPATAN 10");
  }
}

console.log("====================================");
console.log("===============Soal 5===============");
//soal 5
let bintang = "";
for (let i = 1; i <= 5; i++) {
  bintang += "*";
  console.log(bintang);
}
