let nama = "", peran = "";
if (nama === "") {
    console.log("nama wajib diisi");
}else if (peran === "") {
    console.log("Pilih Peranmu untuk memulai game.");
}else{
    switch (peran) {
        case "Ksatria":
            console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`);
            break;
        case "Tabib":
            console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`);
            break;
        case "Penyihir":
            console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`);
            break;        
        default:
            console.log(`tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`);
            break;
    }
}
