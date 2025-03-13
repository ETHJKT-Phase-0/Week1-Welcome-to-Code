/**
 *@ Author: Ulkaboos a.k.a Julius  
 */

let nama = "Arif";
let peran = "Ksatria";

if (!nama) {
    console.log("nama wajib diisi");
} else {
    if (!peran) {
        console.log("Pilih Peranmu untuk memulai game");
    } else {
        // Respons sesuai peran
        if (peran === "Ksatria") {
            console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
        } else if (peran === "Tabib") {
            console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka.`);
        } else if (peran === "Penyihir") {
            console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
        } else {
            console.log("Tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada.");
        }
    }
}