// Soal 1:
// js
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
// isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)
// Selamat Datang di Game Proxytia
// Inisialisasi nama dan peran
// jika nama kosong maka tampilkan nama wajib diisi
//     jika nama terisi maka tampilkan Halo $(nama) , Selamat Datang di Game Proxytia
// jika peran kosong maka tampilkan Pilih peranmu untuk memulai game
//     jika peran === Ksatria maka tampilkan halo Ksatria $(nama) , kamu dapat menyerang dengan senjatamu!
//     dan jika peran === Tabib maka tampilkan halo Tabib $(nama) , kamu akan membantu temanmu yang terluka!
//     dan jika peran === Penyihir maka tampilkan halo Penyihir $(nama) , ciptakan keajaiban yang membantu kemenanganmu!
//     jika peran tidak ada maka tampilkan kamu jadi bot aja ya, peran yang kamu pilih ga ada
// Program selesai



let nama = "", peran = "";


//code disini gunakan console.log untuk outputnya
console.log(" ========= Proxytia ========= ");
nama = "Ackerman";
if (nama === "") {
    console.log("Nama wajib diisi!!");
} else {
    console.log(`Halo ${nama} , Selamat datang di game Proxytia`);
}
peran = "Penyihir";
if (peran === "") {
    console.log("Pilih Peranmu untuk memulai game")
} else if (peran === "Ksatria") {
    console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`)
} else if (peran === "Tabib") {
        console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka!`)
} else if (peran === "Penyihir") {
        console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`)
} else {
        console.log('kamu jadi bot aja ya, peran yang kamu pilih ga ada')
};
