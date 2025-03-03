// variable 
let tanggal = "1";
let bulan = "1";
let tahun = "1945";

// switch case
if (tanggal < 1 || tanggal >= 31) {
    console.log("Tanggal tidak valid");
} else if (tahun <= 1900 || tahun >= 2200) {
    console.log("Tahun tidak valid");
};

switch (bulan) {
    case "1":
        NamaBulan = ("Januari");
        break;
    case "2":
        NamaBulan = ("Februari");
        break;
    case "3":
        NamaBulan = ("Maret");
        break;
    case "4":
        NamaBulan = ("April");
        break;
    case "5":
        NamaBulan = ("Mei");
        break;
    case "6":
        NamaBulan = ("Juni");
        break;
    case "7":
        NamaBulan = ("Juli");
        break;
    case "8":
        NamaBulan = ("Agustus");
        break;
    case "9":
        NamaBulan = ("September");
        break;
    case "10":
        NamaBulan = ("Oktober");
        break;
    case "11":
        NamaBulan = ("November");
        break;
    case "12":
        NamaBulan = ("Desember");
        break;
    default:
        Namabulan = ("Bulan tidak valid");
        return;
};

// switch case
// output
console.log(`${tanggal} ${NamaBulan} ${tahun}`);