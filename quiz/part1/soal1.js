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

// cek nama, jika nama kosong ada peringatan "nama wajib diisi"
// cek peran, jika peran kosong ada peringatan "Pilih Peranmu untuk memulai game"
// tampilkan 3 peran yaitu ksatira, tabib, dan penyihir
// jika peran adalah ksatria akan tampilkan "halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!"
// jika peran adalah tabib akan tampilkan "halo Tabib ${nama} , kamu akan membantu temanmu yang terluka"
// jika peran adalah penyihir akan tampilkan "halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!"
// jika peran tidak ada akan tampilkan "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"

//code disini gunakan console.log untuk outputnya

let nama = "tan",
peran = "ksatria";

if (!nama) {
  console.log("nama wajib diisi");
} else if (!peran) {
  console.log("Pilih Peranmu untuk memulai game")
} else {
  if (peran = "ksatria") {  
    console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`);
  } else if (peran = "tabib") {
    console.log(`halo Tabib ${nama} , kamu akan membantu tenmu yang terluka`);
  } else if (peran = "penyihir") {
    console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`);
  } else {
    console.log("tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada");
  }
}


