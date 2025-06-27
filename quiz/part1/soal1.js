let nama = "ibnu", peran = "penyihir";

if (!nama) {
    console.log ("Nama wajib diisi")
} else {
    console.log ("selmat datang di proxytia")
}

if (peran === "ksatria") {
    console.log ('halo Ksatria ' + nama +', kamu dapat menyerang dengan senjatamu!')
} else if (peran === "tabib") {
    console.log ('halo tabib ' + nama +', kamu akan membantu temanmu yang terluka')
} else if (peran === "penyihir") {
    console.log ('halo penyihir ' + nama +', ciptakan keajaiban yang membantu kemenanganmu!')
} else {
    console.log ("Pilih Peranmu untuk memulai game, (cth: ksatria, tabib, penyihir")
}