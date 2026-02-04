// Soal 1

let nama = "V",
  peran = "penyiHiR";

if (!nama) {
  console.log("Nama wajib diisi!");
} else {
  switch (peran.toLowerCase()) {
    case "Ksatria".toLowerCase():
      console.log(
        `Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`,
      );
      break;
    case "Tabib".toLowerCase():
      console.log(
        `Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka.`,
      );
      break;
    case "Penyihir".toLowerCase():
      console.log(
        `Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`,
      );
      break;
    default:
      console.log("Pilih Peranmu untuk memulai game");
  }
}

// Soal 2
let tanggal = 2;
let bulan = 11;
let tahun = 2025;

if (bulan < 1 || bulan > 12) console.log("Bulan yang anda masukkan salah");
if (tanggal < 1 || tanggal > 31)
  console.log("Tanggal yang anda masukkan salah");
if (tahun < 1900 || tahun > 2200) console.log("Tahun yang anda masukkan salah");
else {
  switch (bulan) {
    case 1:
      console.log(`${tanggal} Januari ${tahun}`);
      break;
    case 2:
      console.log(`${tanggal} Februari ${tahun}`);
      break;
    case 3:
      console.log(`${tanggal} Maret ${tahun}`);
      break;
    case 4:
      console.log(`${tanggal} April ${tahun}`);
      break;
    case 5:
      console.log(`${tanggal} Mei ${tahun}`);
      break;
    case 6:
      console.log(`${tanggal} Juni ${tahun}`);
      break;
    case 7:
      console.log(`${tanggal} Juli ${tahun}`);
      break;
    case 8:
      console.log(`${tanggal} Agustus ${tahun}`);
      break;
    case 9:
      console.log(`${tanggal} September ${tahun}`);
      break;
    case 10:
      console.log(`${tanggal} Oktober ${tahun}`);
      break;
    case 11:
      console.log(`${tanggal} November ${tahun}`);
      break;
    case 12:
      console.log(`${tanggal} Desember ${tahun}`);
      break;
  }
}
