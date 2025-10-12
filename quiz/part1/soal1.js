// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// yaitu nama dan peran. Variabel peran harus memiliki isi data, 
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel 
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//tips belajar penggunaan `` (backtick) pada javascript agar
//mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)

// pertama membuat 2 variabel: nama(nama kosong? diberi peringatan) dan peran(harus ada isi data)
// jika nama kosong, beri peringatan: "nama wajib diisi"
// jika peran kosong,beri peringatan: "pilih peranmu untuk memulai game"
// lalu membuat program pengecekan isi variabel 3 peran dengan 4 respon dalam soal
// 3 peran yang ada akan muncul kalimat dalam soal (Ksatria, Tabib, Penyihir)
// peran yang tidak ada dari 3 diatas akan diberi kalimat khusus
// program bisa dibuat menggunakan conditional statement

let nama = "Fransisco", peran = "White Mage";

//code disini gunakan console.log untuk outputnya

if (nama === "") {
    console.log("nama wajib diisi")
} else if (peran === "") {
    console.log("pilih peranmu untuk memulai game")
}

if (peran === "Ksatria") {
    console.log(`halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`)
} else if (peran === "Tabib") {
    console.log(`halo Tabib ${nama}, kamu akan membantu temanmu yang terluka`)
} else if (peran === "Penyihir") {
    console.log(`halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`)
} else {
    console.log(`tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`)
}