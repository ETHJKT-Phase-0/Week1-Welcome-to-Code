for (let i = 0; i < 3; i++) {
  console.log(i); // Output: 0, 1, 2
}

let sandi = "";
while (sandi !== "1234") {
  sandi = prompt("Masukkan sandi:"); // Ulangi sampai sandi benar
}

let angka;
do {
  angka = prompt("Masukkan angka > 10:"); 
} while (angka <= 10);

const buah = ["🍎", "🍌", "🍊"];
for (const b of buah) {
  console.log(b); // Output: 🍎, 🍌, 🍊
}

const mobil = { merek: "Toyota", tahun: 2020 };
for (const key in mobil) {
  console.log(key, ":", mobil[key]); // merek: Toyota, tahun: 2020
}

for (let i = 1; i <= 5; i++) {
  if (i === 3) break; // Berhenti di iterasi ke-3
  console.log(i); // Output: 1, 2
}

let i = 0;
while (i < 5) { // ❌ Lupa i++
  console.log(i);
}