console.log("====================================");
console.log("===============Soal 1===============");
//soal 1

let nama = "adam",
  peran = "Penyihir";

if (!nama && !peran) {
  console.log("Nama harus diisi!");
} else if (nama && peran === "") {
  console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`);
} else if (nama && peran === "Ksatria") {
  console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`);
} else if (nama && peran === "Tabib") {
  console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`);
} else if (nama && peran === "Penyihir") {
  console.log(
    `halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`
  );
}

console.log("====================================");
console.log("===============Soal 2===============");
//soal 2
let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 12; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2200; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

if (tanggal >= 1 && tanggal <= 31) {
  if (tahun >= 1900 && tahun <= 2200) {
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
      default:
        console.log("Bulan tidak valid");
        break;
    }
  } else {
    console.log("Tahun tidak valid");
  }
} else {
  console.log("Tanggal tidak valid");
}
