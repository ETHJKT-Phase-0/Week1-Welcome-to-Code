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

// cek nama, kalo kosong ntar kasih tau kalo nama wajib diisi
// cek peran, kalo kosong ntar suruh pilih peran. Kalo gaada di pilihan, suruh jadi bot aja
// ada 3 peran, ksatria, tabib, ama penyihir
// kalimat tiap output masing" peran itu beda

let nama = "Ray", peran = "Penyihir";

//code disini gunakan console.log untuk outputnya

function varCheck() {
    if (nama) {
        if (peran == "") {
            console.log(`Pilih Peranmu untuk memulai game`)
        } else if (peran == "Ksatria") {
            console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`)
        } else if (peran == "Tabib") {
            console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`)
        } else if (peran == "Penyihir") {
            console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`)
        } else {
            console.log(`tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`)
        }
    } else {
        console.log("nama wajib diisi")
    }
}

varCheck()