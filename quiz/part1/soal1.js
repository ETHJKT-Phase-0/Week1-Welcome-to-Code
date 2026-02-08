// ALGORITMA
// 1. Buat Variable "nama" dan "peran"
// 2. Cek dengan If Statement, apakah variable "nama" kosong?
// Jika kosong = tampilkan log "nama wajib diisi"
// Jika tidak kosong, Lanjut ke If Statement berikutnya
// 3. Cek apakah variable "peran" kosong?
// Jika kosong = tampilkan log "Pilih Peranmu untuk memulai game"
// Jika tidak kosong, Lanjut ke if Statement berikutnya
// 4. Cek apakah variable peran === "Ksatria"?
// Jika ya = tampilan log "halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!"
// Jika tidak, lanjut ke if statement berikutnya
// 5. Cek apakah variable peran === "Tabib"?
// Jika ya = tampilan log "halo Tabib ${nama}, kamu akan membantu temanmu yang terluka"
// Jika tidak, lanjut ke if statement berikutnya
// 6. Cek apakah variable peran === "Penyihir"?
// Jika ya = tampilan log "halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!"
// Jika tidak, lanjut ke if statement berikutnya
// 7. Cek apakah variable peran diisi selain "Ksatria", "Tabib", "Penyihir"?
// Jika ya = tampilan log "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"

let nama = "", peran = ""

if (nama === "") {
    console.log("nama wajib diisi")
} else if (peran === "") {
    console.log("Piih Peranmu untuk memulai game")
} else if (peran === "Ksatria") {
    console.log(`halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`)
} else if (peran === "Tabib") {
    console.log(`halo Tabib ${nama}, kamu akan membantu temanmu yang terluka`)
} else if (peran === "Penyihir") {
    console.log(`halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`)
} else {
    console.log("tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada")
}