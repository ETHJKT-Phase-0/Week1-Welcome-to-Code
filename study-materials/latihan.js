// let totalharga = 0;
// const PAJAK = 20 / 100;

// function hitungTotal(harga) {
//     totalHarga = harga + (harga * PAJAK);
//     return totalHarga;
// }
// console.log(hitungTotal(10000))

// Global Scope
// var globalVar = "Bisa diakses di mana saja";
// let globalLet = "Ini juga global";

// function contohFungsi() {
//     console.log(globalVar);
// }

// contohFungsi();

//Local Variable
// function contohFungsi() {
//     var lokalVar = "Hanya dalam fungsi";
//     let lokalLet = "Juga hanya dalam fungsi";

//     console.log(lokarLet);
// }

// Block Scope
// if (true) {
//     let blockVar = "Hanya dalam block";
//     const blockConst = "Juga hanya dalam block";
//     var notBlockVar = "Bisa diakses di luar block";
// }

// console.log(varVariable);
// var varVariable = "test";

// let letVariable = "test";

// console.error("Terjadi Kesalahan");

// function hitungTotal(harga, jumlah) {
//     console.log("Input:", { harga, jumlah});

//     const total = harga * jumlah;
//     console.log("Total:", total);

//     if (total > 100000) {
//         console.warn("Transaksi besar terdeteksi");
//     }

//     return total;
// }

// function sapaan(nama) {
//     return `Halo ${nama} !`;
// };

// console.log(sapaan(taufiq));

// let nama = "Budi";
// let umur = 25;

// let profil = `Nama: ${nama} Umur: ${umur} tahun`;

// console.log(profil);

// let kata = "Indonesia";

// let jumlahVokal = 0;
// for(let i = 0; i < kata.length; i++) {
//     if("aiueoAIUEO".includes(kata[i])) {
//         jumlahVokal++;
//     }
// }
// console.log(`Jumlah vokal: ${jumlahVokal}`);

// let hari = "Senn";
// switch (hari) {
//     case "Senin":
//         console.log("Awal Minggu");
//         break;
//     case "Jumat":
//         console.log("Akhir minggu kerja");
//         break;
//     default:
//         console.log("Hari biasa");
// }

// let usia = 25;
// let punyaSIM = false;

// if (usia >= 17 && punyaSIM) {
//     console.log("Anda boleh mengemudi");
// } else {
//     console.log("Anda belum boleh mengemudi");
// }

// let saldo = 1000000;
// let verifikasi = true;
// let limitHarian = false;

// if (saldo >= 500000 && verifikasi && !limitHarian)
// {
//     console.log("Transaksi dapat diproses");
// }

// let metodePembayaran = "transfer";

// if (metodePembayaran === "transfer" || metodePembayaran === "kartu kredit" || metodePembayaran === "e-wallet") {
//     console.log("Metode pembayaran diterima");
// }

// let namaPengguna = "";
// let displayName = namaPengguna || "Tamu";

// let sistemMaintenance = false;

// if (!sistemMaintenance) {
//     console.log("Sistem dapat diakses");
// }

// let data = null;
// if (!data) {
//     console.log("Data tidak tersedia");
// }

// let cuaca = "cerah";
// let waktu = "pagi";
// let akhirPekan = "true";

// if ((cuaca === "cerah" || cuaca === "berawan") && (waktu === "pagi" && akhirPekan)){
//     console.log("Waktu yang tepat untuk jogging!");
// }

// PART 5 - BELAJAR LOOPING

// for (let i = 0; i < 3; i++) {
//     console.log(i);
// }
const prompt = require('prompt-sync')({ sigint: true });

// let sandi = "";
// while (sandi !== "1234") {
//     sandi = prompt("Masukkan Sandi:");
// }

// let angka;
// do {
//     angka = prompt("Masukkan Angka > 10:");
// } while (angka <= 10);

// const buah = ["🍎", "🍌", "🍊"];
// for (const b of buah) {
//   console.log(b); // Output: 🍎, 🍌, 🍊
// }

// const mobil = {
//     merek: "Toyota", tahun: 2020 
// };
// for (const key in mobil) {
//     console.log(key, ":", mobil[key]);
// }

// for (let i = 1; i <= 5; i++) {
//     if (i === 3) break;
//     console.log(i);
// }

// let i = 0;
// while (i < 5) {
//     console.log(i);
// }

// for (let i = 1; i <= 100; i++) {
//     if (i % 28 === 0) {
//         console.log("FOURSEVEN");
//     } else if (i % 4 === 0) {
//         console.log("FOUR");
//     } else if (i % 7 === 0) {
//         console.log("SEVEN");
//     } else {
//         console.log(i);
//     }
// }

// for (let i = 0; i < 3; i++) {
//     console.log(`Outer: ${i}`);

//     for (let j = 0; j < 2; j++) {
//         console.log(`Inner: ${j}`);
//     }
// }
// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// for (let row = 0; row < 3; row++) {
//     for (let col = 0; col < 3; col++) {
//         console.log(matrix[row][col]);
//     }
// }

// let pattern = "";
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         pattern += "*";
//     }
//     pattern += "\n";
// }
// console.log(pattern);

// const arr = [5, 3, 8, 2];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//             [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         }
//     }
// }
// console.log(arr);

// for (let i = 1; i <= 3; i++) {
//     console.log(`Iterasi ke-${i}`);

//     let j = 1;
//     while (j <= 2) {
//         console.log(`Sub-iterasi ke-${j}`);
//         j++;
//     }
// }

// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//     }
// }

// for (let i = 0; i < 3; i++) {
//     for (let i = 0; i < 2; i++) {
//         console.log(i);
//     }
// }

// for (let i = 0; i < 5; i++) {
//     while (true) {
//         console.log(i);
//     }
// }

// for (let i = 2; i <= 100; i++) {
//     let isPrime = true;
//     for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//             isPrime = false;
//             break;
//         }
//     }     
//     if (isPrime) {
//         console.log(i);
//     }
// }









