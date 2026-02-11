

let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = "februari"; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//code switch case kamu disini
if (tanggal >=1 && tanggal <=31){
    console.log(tanggal)
}
switch(bulan){
    case "januari":
        console.log("Januari");
        break;
    case "februari":
        console.log("Februari");
        break;
    case "maret":
        console.log("Maret");
        break;
    case "april":
        console.log("April");
        break;
    case "mei":
        console.log("Mei");
        break;
    case "juni":
        console.log("Juni");
        break;
    case "juli":
        console.log("Juli");
        break;
    case "agustus":
        console.log("Agustus");
        break;
    case "september":
        console.log("September");
        break;
    case "oktober":
        console.log("Oktober");
        break;
    case "november":
        console.log("November");
        break;
    case "desember":
        console.log("Desember");
        break;
    default:
        console.log("gada bulan lg");
}
if(tahun>=1990 && tahun<= 2200){
    console.log(tahun);
}