// ## Soal 1:

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

// 1. user memasuki game atau memulai game
// 2. sistem akan meminta user menginput 2 variable nama dan peran
// 3. ketika nama tidak disini maka sistem akan mengembalikan nilai "nama wajib diisi" dan ketika peran juga tidak diisi sistem akan mengembalikan nilai "Pilih Peranmu untuk memulai game".
// 4. setelah mengisi nama dan peran, user akan terpisah menjadi 4 bagian sesuai dengan role yang ia pilih, setiap role akan mengembalikan nilai seperti berikut:
//  - jika user menuliskan peran "Ksatria" maka sistem akan mengatakan "halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!"
//  - jika user menuliskan peran "Tabib" maka sistem akan mengatakan "halo Tabib ${nama} , kamu akan membantu temanmu yang terluka"
//  - jika user menuliskan peran "Penyihir" maka sistem akan mengatakan "halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!"
// jika user memilih peran yang tidak ada di dalam sistem maka sistem akan mengembalikan nilai "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"

let nama = "xnaizer", peran = "KsAtria";


if (nama === ""){
    console.log("nama wajib diisi!");
} else if (peran === ""){
    console.log("Pilih Peranmu untuk memulai game");
} else if (peran.toLowerCase() === "ksatria") {
    console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`);
} else if (peran.toLowerCase() === "tabib"){
    console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`);
} else if (peran.toLowerCase() === "penyihir"){
    console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`);
} else {
    console.log(`${nama}, tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`)
}



//code disini gunakan console.log untuk outputnya

