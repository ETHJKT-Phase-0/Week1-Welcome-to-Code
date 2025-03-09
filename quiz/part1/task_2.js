let tanggal = 28
let bulan = 2
let tahun = 2025


const NAMA_BULAN = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
]

if (tahun < 1900 || tahun > 2200) {
    console.log("Tahun yang kamu masukkan salah!")
}

let kabisat = (tahun % 4 === 0 && tahun % 100 !== 0) || (tahun % 400 === 0)
let tanggal_valid = false

if (bulan < 1 || bulan > 12) {
    console.log("Bulan yang kamu masukkan salah!")
} else {
    switch (bulan) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            tanggal_valid = tanggal <= 31
            break
        case 4: case 6: case 9: case 11:
            tanggal_valid = tanggal <= 30
            break
        case 2:
            tanggal_valid = tanggal <= (kabisat ? 29 : 28)
            break
        default:
            tanggal_valid = false
    }

    if (!tanggal_valid || tanggal < 1) {
        console.log("Tanggal yang kamu masukkan salah!")
    } else {
        console.log(`${tanggal} ${NAMA_BULAN[bulan - 1]} ${tahun}`)
    }
}
