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

// ALGORITMA :
// 1. Ucapan selamat datang
// 2. Mengecek variable nama dan peran
// 3. Jika  nama dan peran kosong, tampilkan pesan "Nama wajib diisi dan Pilih Peranmu untuk memulai game!"
// 4. Jika hanya yang nama kosong, tampilkan pesan "Nama Wajib diisi!"
// 5. Jika hanya peran kosong, tampilkan pesan "Pilih Peranmu untuk memulai game!"
// 6. Jika peran yang dipilih tidak sesuai dengan disediakan, tampilkan pesan :
//    "Tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"
// 7. Jika nama dan peran sudah terisi sesuai dengan yang disediakan, 
//    Mengecek kembali peran apa yang dipilih :
//    - Jika peran Ksatria, tampilkan pesan "Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!"
//    - Jika peran Tabib, tampilkan pesan "Halo Tabib ${nama} , kamu akan membantu temanmu yang terluka!"
//    - Jika peran Penyihir, tampilkan pesan "Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!"

//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)

let nama = "Revo"
let peran = "Ksatria";

let peran1 = "Ksatria";
let peran2 = "Tabib";
let peran3 = "Penyihir";

console.log(`Selamat datang di Proxytia!`);

if (nama == "" && peran == "") {
    console.log("Nama wajib diisi dan Pilih Peranmu untuk memulai game!");
} else if (nama == "") {
    console.log("Nama wajib diisi!");
} else if (peran == "") {
    console.log("Pilih Peranmu untuk memulai game!");
} else if (peran == peran1 || peran == peran2 || peran == peran3) {
    if (peran == peran1) {
        console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
    } else if (peran == peran2) {
        console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka!`)
    } else if (peran == peran3) {
        console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`)
    }
} else {
        console.log("Tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada!")
    }

//code disini gunakan console.log untuk outputnya