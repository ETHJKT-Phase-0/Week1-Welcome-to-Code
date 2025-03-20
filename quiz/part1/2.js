let hari = 21;
let bulan = 0;
let tahun = 1945;
let msg = "";

switch (bulan) {
  case 1:
    msg = `${hari} Januari ${tahun}`;
    break;
  case 2:
    msg = `${hari} Februari ${tahun}`;
    break;
  case 3:
    msg = `${hari} Maret ${tahun}`;
    break;
  case 4:
    msg = `${hari} April ${tahun}`;
    break;
  case 5:
    msg = `${hari} Mei ${tahun}`;
    break;
  case 6:
    msg = `${hari} Juni ${tahun}`;
    break;
  case 7:
    msg = `${hari} Juli ${tahun}`;
    break;
  case 8:
    msg = `${hari} Agustus ${tahun}`;
    break;
  case 9:
    msg = `${hari} September ${tahun}`;
    break;
  case 10:
    msg = `${hari} Oktober ${tahun}`;
    break;
  case 11:
    msg = `${hari} November ${tahun}`;
    break;
  case 12:
    msg = `${hari} Desember ${tahun}`;
    break;
  default:
    msg = "Error: bulan tidak diketahui";
}

console.log(msg);
