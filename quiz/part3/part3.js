//soal 1
console.log("LOOPING PERTAMA");
i = 0;
while (i <= 10) {
  console.log(i++);
}

console.log("LOOPING KEDUA");
i = 10;
while (i >= 0) {
  console.log(i--);
}

//soal 2
console.log("LOOPING PERTAMA");
for (i = 0; i <= 10; i++) {
  console.log(i);
}

console.log("LOOPING KEDUA");
for (i = 10; i >= 0; i++) {
  console.log(i);
}

//soal 3
counter = 1;
while (counter <= 100) {
  console.log(counter % 2 == 0 ? "GENAP" : "GANJIL");
  counter++;
}

//soal4
counter2 = 0;
counter5 = 0;
counter9 = 0;

while (counter2 <= 100) {
  if (counter2 % 3 == 0) console.log(`${counter2} kelipatan 3`);
  counter2 += 2;
}
while (counter5 <= 100) {
  if (counter5 % 6 == 0) console.log(`${counter5} kelipatan 6`);
  counter5 += 5;
}
while (counter9 <= 100) {
  if (counter9 % 10 == 0) console.log(`${counter9} kelipatan 10`);
  counter9 += 9;
}

//soal 5
kosong = "";
for (l = 0; l <= 5; l++) {
  for (c = 0; c < l; c++) {
    kosong += "*";
  }
  kosong += "\n";
}

console.log(kosong);
