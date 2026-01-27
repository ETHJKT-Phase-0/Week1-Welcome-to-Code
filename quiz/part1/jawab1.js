// Soal 1

// Algoritma:
// 1. Jika nama kosong, maka akan menampilkan pesan: Nama harus diisi!
// 2. Jika peran kosong, maka akan menampilkan pesan: Pilih Peranmu untuk memulai game!
// 3. Jika peran adalah ksatria, maka akan menampilkan pesan: kamu dapat menyerang dengan senjatamu!
// 4.  Jika peran adalah tabib, maka akan menampilkan pesan: kamu akan membantu temanmu yang terluka
// 5. Jika peran adalah penyihir, maka akan menampilkan pesan: ciptakan keajaiban yang membantu kemenanganmu!
// 6. Jika peran yang dipilih tidak ada, maka akan menampilkan pesan default: Peran yang dipilih tidak ada, kamu akan menjadi bot

// Kode:
let nama = "Anton";
let peran = "";

if (nama === "") {
    console.log ("Nama harus diisi!")
} else if (peran === "") {
    console.log ("Pilih Peranmu untuk memulai game!")
} else if (peran === "Ksatria") {
    console.log (`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`)
} else if (peran === "Tabib") {
    console.log (`Halo ${nama}, kamu akan membantu temanmu yang terluka`)
} else if (peran === "Penyihir") {
    console.log (`Halo ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`)
} else {
    console.log (`Peran yang dipilih tidak ada, kamu akan menjadi bot`)
}