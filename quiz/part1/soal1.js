//jika nama atau peran tidak diisi maka akan ada peringatan

let nama = "abdul"
let peran = "penyihir"

//cek apakah nama atau peran kosong
if (!nama) {
    console.log("Nama Wajib Diisi");
} else if (!peran) {
    console.log("Pilih Peranmu Untuk Memulai Game")
} else {
    //memilih peran
    //Peran Ksatria
    if (peran.toLowerCase() === "ksatria") {
        console.log(`halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
    }
    //Peran Tabib
    else if (peran.toLowerCase() === "tabib") {
        console.log(`halo Tabib ${nama}, kamu akan membantu temanmu yang terluka`);
    }
    //Peran Penyihir
    else if (peran.toLowerCase() === "penyihir") {
        console.log(`halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`)
    }
}