let nama = "abede", peran = "Penyihir";

if (nama === "") {
    console.log("nama wajib diisi");
} else {
    if (peran === ""){
        console.log("Pilih peranmu untuk memulai game")
    } else {
        if (peran === "Ksatria"){
            console.log(`halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!`);
        } else if (peran === "Tabib"){
            console.log(`halo ${peran} ${nama}, kamu akan membantu temanmu yang terluka`);
        } else if (peran === "Penyihir"){
            console.log(`halo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
        } else {
            console.log("kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada")
        }
    }
}