 //
 let nama = "Kelvin", peran = "Ksatria";

//Check nama diisi atau tidak
if (nama == ""){
    console.log("nama wajib diisi") 
} else {
    //Check peran dipilih atau tidak
    if (peran == ""){
        console.log("Pilih Peranmu untuk memulai game") //Jika tidak dipilih
    }
    else if (peran == "Ksatria" || "ksatria") {
        console.log(`Hallo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`)// Jika memilih ksatria
    }
    else if (peran == "Tabib" || "tabib") {
        console.log(`Hallo Tabib ${nama}, kamu akan membantu temanmu yang terluka!`) // Jika memilih tabib
    }
    else if (peran == "Penyihir" || "penyihiir") {
        console.log(`Halo penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`) // Jika memilih penyihir
    }
    else{
        console.log("Kamu jadi bot aja ya, peran yg kamu pilih enggak ada")
    }
}
//