// Algoritma:
// 1. Cek apakah nama kosong, jika ya, tampilkan "Nama wajib diisi!"
// 2. Jika nama tidak kosong dan peran kosong, tampilkan "Pilih Peranmu untuk memulai game"
// 3. Jika keduanya tidak kosong:
//    - Cek isi peran dan tampilkan pesan sesuai peran yang dipilih
//    - Jika peran tidak sesuai, tampilkan "kamu jadi bot"

let nama = "abdul"; // Ganti sesuai input
let peran = "Tabib"; // Ganti sesuai input

if (nama === "") {
  console.log("Nama wajib diisi!");
} else if (peran === "") {
  console.log(`Halo ${nama}, Pilih Peranmu untuk memulai game`);
} else {
  if (peran === "Ksatria") {
    console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
  } else if (peran === "Tabib") {
    console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka`);
  } else if (peran === "Penyihir") {
    console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
  } else {
    console.log(`Tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`);
  }
}

let tanggal = 12;
let bulan = 2; // diubah ke angka!
let tahun = 2001;

let namaBulan = "";

switch (bulan) {
  case 1:
    namaBulan = "Januari";
    break;
  case 2:
    namaBulan = "Februari";
    break;
  case 3:
    namaBulan = "Maret";
    break;
  case 4:
    namaBulan = "April";
    break;
  case 5:
    namaBulan = "Mei";
    break;
  case 6:
    namaBulan = "Juni";
    break;
  case 7:
    namaBulan = "Juli";
    break;
  case 8:
    namaBulan = "Agustus";
    break;
  case 9:
    namaBulan = "September";
    break;
  case 10:
    namaBulan = "Oktober";
    break;
  case 11:
    namaBulan = "November";
    break;
  case 12:
    namaBulan = "Desember";
    break;
  default:
    namaBulan = "Bulan tidak valid";
}

if (namaBulan !== "Bulan tidak valid") {
  console.log(`${tanggal} ${namaBulan} ${tahun}`);
} else {
  console.log("Tanggal atau bulan tidak valid");
}
