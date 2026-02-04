// Soal 1
let count = 0;

console.log("Looping Pertama");
while (count <= 10) {
  console.log(`Count - [${count}]`);
  if (count == 10) break;
  count += 1;
}

console.log("Looping Kedua");
while (count >= 0) {
  console.log(`Count - [${count}]`);
  count -= 1;
}

// Soal 2
let count2 = 0;

console.log("Looping Pertama");
for (let i = 0; count2 <= 10; i++) {
  console.log(`Count - [${count2}]`);
  if (count2 == 10) break;
  count2 += 1;
}

console.log("Looping Kedua");
for (let j = 10; j >= 0; j--) {
  console.log(`Count - [${count2}]`);
  if (count2 == 0) break;
  count2 -= 1;
}

// Soal 3

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(`${i} - GENAP`);
  } else {
    console.log(`${i} - GANJIL`);
  }
}

// Soal 4
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0) {
    console.log(`${i} - KELIPATAN 3`);
  }
  if (i % 6 == 0) {
    console.log(`${i} - KELIPATAN 6`);
  }
  if (i % 10 == 0) {
    console.log(`${i} - KELIPATAN 10`);
  }
}

// Soal 5
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}
