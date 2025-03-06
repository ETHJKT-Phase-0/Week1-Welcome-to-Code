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
/*
1.  Variabel nama diinisialisasi dengan nilai "Kratione"
    Variabel peran diinisialisasi dengan nilai "Ksatria"    
2.  Jika nama kosong (""), muncul peringatan "Nama waji diisi"
    Jika peran kosong (""), muncul peringatan "Pilih peranmu untuk memulai game"
3.  Jika peran "Ksatria", muncul respon "halo Ksatria [nama] , kamu dapat menyerang dengan senjatamu!"
    JIka peran "Tabib", muncul respon "halo Tabib [nama] , kamu akan membantu temanmu yang terluka"
    Jika peran "Penyihir", muncul respon "halo Penyihir [nama] , ciptakan keajaiban yang membantu kemenanganmu!"
    Jika peran tidak sesuai/ada muncul respon "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"
*/

let nama = "Kratione", peran = "Ksatria";

if (nama === "") {
    console.log("Nama wajib diisi!");
} else if (peran === "") {
    console.log("Pilih peranmu untuk memulai game!");
} else {
    if (peran === "Ksatria") {
        console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`);
    } else if (peran === "Tabib") {
        console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`);
    } else if (peran === "Penyihir") {
        console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`);
    } else {
        console.log("tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada");
    }
}

//SOAL SELESAI