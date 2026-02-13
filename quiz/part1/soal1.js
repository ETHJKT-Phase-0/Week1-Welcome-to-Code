//pembuka
console.log("Welcome to Proxytia")

//variabel
let nama = "Albedo" 
let peran = "penyihir"

// conditioning nama
 if (nama === "") {
    console.log( "nama wajib diisi!" )
} else {
    console.log("hallo," + nama)
}

//conditioning peran
if (peran === "") {
    console.log("Pilih Peranmu untuk memulai game!")
} else if (peran === "ksatria") {
    console.log(nama +",kamu dapat menyerang dengan senjatamu!")
} else if (peran === "tabib") {
    console.log(nama +",kamu akan membantu temanmu yang terluka")
}  else if (peran === "penyihir") {
    console.log(nama +", ciptakan keajaiban yang membantu kemenanganmu!")
} else {
    console.log("tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada")
}