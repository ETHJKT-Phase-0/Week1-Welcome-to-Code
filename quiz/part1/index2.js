let hari = 1;      // antara 1–31
let bulan = 5;     // antara 1–12
let tahun = 1945;  // antara 1900–2200

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
        break;
}

if (
    hari >= 1 && hari <= 31 &&
    tahun >= 1900 && tahun <= 2200 &&
    namaBulan !== "Bulan tidak valid"
) {
    console.log(`${hari} ${namaBulan} ${tahun}`);
} else {
    console.log("Tanggal tidak valid.");
}
