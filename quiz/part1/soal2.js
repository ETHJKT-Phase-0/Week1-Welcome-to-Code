let tanggal = 12
let bulan = 5
let tahun = 2001

switch(bulan) {
    case 1: bulan = "Januari"; break
    case 2: bulan = "Februari"; break
    case 3: bulan = "Maret"; break
    case 4: bulan = "April"; break
    case 5: bulan = "Mei"; break
    case 6: bulan = "Juni"; break
    case 7: bulan = "Juli"; break
    case 8: bulan = "Agustus"; break
    case 9: bulan = "September"; break
    case 10: bulan = "Oktober"; break
    case 11: bulan = "November"; break
    case 12: bulan = "Desember"; break
    default: bulan = "Bulan tidak valid"; break
}

if (tanggal < 1 || tanggal > 31) {
    console.log("Maaf, angka tanggal yang kamu masukkan salah!")
} else if (tahun < 1900 || tahun > 2200)  {
    console.log("Maaf, angka tahun yang kamu masukkan salah!")
} else if (bulan === "Bulan tidak valid" || bulan === "Februari" ) {
    console.log("Maaf, angka bulan yang kamu masukkan salah!")
} else {
    console.log(`${tanggal} ${bulan} ${tahun}`)
}