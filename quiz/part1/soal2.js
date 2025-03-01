let tanggal= "0"; 
let bulan = "0"; 
let tahun="0";



if(tanggal<1){
    tanggal="gaada tanggal segiitu"
}

else if(tanggal>31){
   tanggal="gaada tanggal segitu"
}


switch (bulan) {
    case "1":
    namaBulan="januari"
    break;
    case "2":
    namaBulan="februari"
    break;
    case "3":
    namaBulan="maret"
    break;
    case "4":
    namaBulan="april"
    break;
    case "5":
    namaBulan="mei"
    break;
    case "6":
    namaBulan="juni"
    break;
    case "7":
    namaBulan="juli"
    break;
    case "8":
    namaBulan="agustus"
    break;
    case "9":
    namaBulan="september"
    break;
    case "10":
    namaBulan="oktober"
    break;
    case "11":
    namaBulan="november"
    break;
    case "12":
    namaBulan="desember"
    break;

  default:
    namaBulan="bro?"
    break;
}

if(tahun<=1900){
    tahun="mohon pilih dari 1990-2200"
}

else if(tahun>=2200){
    tahun="mohon pilih dari 1990-2200"
}

console.log(`${tanggal}, ${namaBulan}, ${tahun}`);