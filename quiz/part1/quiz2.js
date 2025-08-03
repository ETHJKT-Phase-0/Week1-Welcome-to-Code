let tanggal = 25;
let bulan = "agustus";
let tahun = 1999;



switch (bulan) {
    case "januari":
    case "februari":
    case "maret":
    case "april":
    case "mei":
    case "juni":
    case "juli":
    case "agustus":
    case "september":
    case "oktober":
    case "november":
    case "desember":
        console.log(`${tanggal} ${bulan} ${tahun}`);
        break;
    default:
        console.log("tidak ada nama bulan yang dimaksud");
}