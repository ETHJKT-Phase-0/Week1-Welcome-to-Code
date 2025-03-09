let nama = "Mahmud"
let peran = "Tabib"

list_peran = {
    "ksatria": "kamu dapat menyerang dengan senjatamu!",
    "tabib": "kamu akan membantu temanmu yang terluka.",
    "penyihir": "ciptakan keajaiban yang membantu kemenanganmu!"
}

if (nama === "") {
    console.log("Nama wajib diisi!")
} else if (peran === "") {
    console.log("Pilih peranmu untuk memulai game!")
} else {
    const peranLower = peran.toLowerCase()
    if (!(peranLower in list_peran)) {
        console.log("Kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada!")
    } else {
        console.log(`Halo ${peran} ${nama}, ${list_peran[peranLower]}`)
    }
}
