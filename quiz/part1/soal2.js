function formatTanggal (hari, bulan, tahun){
    let namabulan;
    switch (bulan){
        case 1: namabulan = "januari";
        break;
        case 2: namabulan = "februari";
        break;
        case 3: namabulan = "maret";
        break;
        case 4: namabulan = "april";
        break;
        case 5: namabulan = "mei";
        break;
        case 6: namabulan = "juni";
        break;
        case 7: namabulan = "juli";
        break;
        case 8: namabulan = "agustus";
        break;
        case 9: namabulan = "september";
        break;
        case 10: namabulan = "oktober";
        break;
        case 11: namabulan = "november";
        break;
        case 12: namabulan = "desember";
        break;
        default: return "bulan tidak valid";
        
    }
    return `${hari} ${namabulan} ${tahun}`;

}
let hari =1, bulan = 1, tahun = 2001;
console.log(formatTanggal(hari, bulan, tahun));