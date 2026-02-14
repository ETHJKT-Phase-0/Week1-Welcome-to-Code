// for (let i = 1; i <= 100; i++) {
//   if (i % 28 === 0) { // Kelipatan 4 dan 7 (KPK = 28)
//     console.log("FOURSEVEN");
//   } else if (i % 4 === 0) {
//     console.log("FOUR");
//   } else if (i % 7 === 0) {
//     console.log("SEVEN");
//   } else {
//     console.log(i);
//   }
// }

// let pattern = "";
// for (let i = 1; i <= 5; i++) {           // Loop baris
//   for (let j = 1; j <= i; j++) {         // Loop kolom (bintang per baris)
//     pattern += "*";
//   }
//   pattern += "\n";
// }
// console.log(pattern);




//Latihan 1 - menampilkan yang bukan bilangan prima

for (let i = 2; i <= 100; i++) {       // Loop utama (angka yang dicek)
  let isPrime = true;                  // Flag untuk menKaliani bilangan prima

  for (let j = 2; j < i; j++) {        // Loop pembagi (2 hingga i-1)
    if (i % j === 0) {                 // Jika i habis dibagi j
      isPrime = false;                 // Bukan bilangan prima
      break;                           // Keluar dari loop dalam
    }
  }

  if (!isPrime) {                       // Jika isPrime tetap true
    console.log(i);                    // Tampilkan bilangan prima
  }
}

