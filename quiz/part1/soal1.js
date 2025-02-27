let nama = "Kiel"
let peran = "Ksatria";

if (nama === "") {
    console.log("Nama wajib di isi");
} else if (peran === "") {
    console.log("Pilih Peranmu untuk memulai game")
} else if (peran === "Ksatria") {
    console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`)
} else if (peran === "Tabib") {
    console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`)
} else if (peran === "Penyihir") {
    console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`)
} else {
    console.log("tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada")
}

// penggunaan backstick (` `) bukan petik satu (' ') ya hehehe