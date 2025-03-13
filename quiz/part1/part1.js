//soal 1
let nama = "Virgo",
  peran = "Tabib";
let roles = ["Ksatria", "Tabib", "Penyihir"];

function proxytia(nama, peran, roles) {
  let output;

  if (nama.length < 1) {
    output = `nama wajib diisi`;
    return output;
  }

  switch (peran) {
    case roles[0]:
      output = `halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`;
      break;
    case roles[1]:
      output = `halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`;
      break;
    case roles[2]:
      output = `halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`;
      break;
    default:
      output = `Pilih Peranmu untuk memulai game`;
      break;
  }
  return output;
}

console.log(proxytia(nama, peran, roles));

let tanggal = 1; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 5; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 1945; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

// Menggunakan switch-case untuk pemetaan bulan
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
    console.log("Bulan tidak valid!");
    namaBulan = null;
}

let output = namaBulan
  ? `${tanggal} ${namaBulan} ${tahun}`
  : "Bulan tidak valid!";

console.log(output);
