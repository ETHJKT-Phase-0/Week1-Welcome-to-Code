/**
 *@ Author: Ulkaboos a.k.a Julius  
 */

let tanggal = 14;
let bulan = 9;
let tahun = 2025;

// Validasi tanggal
if (tanggal < 1 || tanggal > 31) {
    console.log("Tanggal yang kamu masukkan tidak valid");
}

// Buat string si bulan sekaligus validasi untuk di default
switch (bulan) {
  case 1:
    bulan = "Januari";
    break;
  case 2:
    bulan = "Februari";
    break;
  case 3:
    bulan = "Maret";
    break;
  case 4:
    bulan = "April";
    break;
  case 5:
    bulan = "Mei";
    break;
  case 6:
    bulan = "Juni";
    break;
  case 7:
    bulan = "Juli";
    break;
  case 8:
    bulan = "Agustus";
    break;
  case 9:
    bulan = "September";
    break;
  case 10:
    bulan = "Oktober";
    break;
  case 11:
    bulan = "November";
    break;
  case 12:
    bulan = "Desember";
    break;
  default:
    bulan = "Bulan yang kamu masukkan tidak valid";
}

// Keluaran format
console.log(`${tanggal} ${bulan} ${tahun}`);