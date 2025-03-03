let nama = "icanxx", peran = "Tabib";

if (nama === "") {
  console.log("nama wajib diisi (┬┬﹏┬┬)");
} else if (peran === "Ksatria") {
    console.log(`halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
} else if (peran === "Tabib") {
    console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka.`);
} else if (peran === "Penyihir") { 
    console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
} else {
    console.log(`tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada ╯︿╰`);
};