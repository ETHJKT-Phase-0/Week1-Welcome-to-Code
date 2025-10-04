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

//user mengisi nama dan peran
//jika nama kosong, maka memberikan output berupa "nama wajib diisi"
//jika peran kosong, maka memberikan output berupa "Pilih Peranmu untuk memulai game"
//jika peran berisi "Ksatria", maka memberikan respon berupa "halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!"
//jika peran berisi "Tabib", maka memberikan respon berupa "halo Tabib ${nama} , kamu akan membantu temanmu yang terluka"
//jika peran berisi "Penyihir", maka memberikan respon berupa "halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!"
//jika user mengisi peran diluar ketiga peran yang ada, akan memberikan respon berupa "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"

let nama = "name", peran = "maling";

if (nama == "") {
  console.log("nama harus diisi");
} else if (peran == "") {
  console.log("Pilih peranmu untuk memulai game");
} else if (peran == "Ksatria") {
  console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`);
} else if (peran == "Tabib") {
  console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`);
} else if (peran == "Penyihir") {
  console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`);
} else {
  console.log("tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada");
}
