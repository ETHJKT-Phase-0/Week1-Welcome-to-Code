// let nama = 'Adi', peran;

// if (!nama){
//     console.log(`Nama Itu Wajib yaa gess`)
// } else if(peran ==="Ksatria"){
//     console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`)
// }else if(peran === "Tabib" ){
//     console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`)
// }else if (peran === "Penyihir"){
//     console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`)
// }else if(!peran){
//     console.log(`tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`)
// }


let tanggal = 12; 
let bulan = 2; 
let tahun = 2001;

switch (bulan){
    case 1:
        bulan = "Januari";
        break;
    
    case 2:
        bulan = "Febuari";
        break;
    
    case 3:
        bulan = "Maret";
        break;
    
    case 4:
        bulan = "April";
        break;
    
    case 5:
        bulan = "Mei";
        break;
    
    case 6:
        bulan = "Juni";
        break;
    
    case 7:
        bulan = "Juli";
        break;
    
    case 8:
        bulan = "Agustus";
        break;
    
    case 9:
        bulan = "September";
        break;
    
    case 10:
        bulan = "Oktober";
        break;
    
    case 11:
        bulan = "November";
        break;
    
    case 12:
        bulan = "Desember";
        break;
    default:
        console.log("Mana Ada Bulan lebih dari 12 jirr lahh 🤣🤣");
        bulan = null;
}

if (bulan) {
    console.log(`${tanggal} ${bulan} ${tahun}`);
}