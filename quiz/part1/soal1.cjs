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
//user diminta untuk memasukkan nama 
//jika nama kosong tampilkan pesan "nama wajib diisi"
//jika nama sudah sesuai diisi
//user diminta untuk memilih 3 peran (Kesatria, Tabib, Penyihir)
//jika peran kosong tampilkan pesan "Pilih Peranmu untuk memulai game"
//jika peran yang di pilih itu kesatria maka hasil nya akan seperti dibawah
//tampilkan pesan "halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!"
//jika peran yang di pilih itu tabib maka hasil nya akan seperti dibawah
//tampilkan pesan "halo Tabib ${nama} , kamu akan membantu temanmu yang terluka"
//jika peran yang di pilih itu penyihir maka hasil nya akan seperti dibawah
//tampilkan pesan "halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!"
//jika peran yang di pilih itu bukan kesatria, tabib, penyihir maka hasil nya akan seperti dibawah
//tampilkan pesan "kamu jadi bot aja ya, peran yang kamu pilih ga ada"

prompt = require('prompt-sync')();

let nama = prompt("Masukkan nama: ");
let peran = prompt("Masukkan peran (ksatria/tabib/penyihir): ");

if (nama === "") {
    console.log("Nama wajib diisi!");
}
if (peran === "") {
    console.log("Pilih peranmu untuk memulai game!");
}

switch (peran) {
    case "Ksatria":
        console.log(`Hal ${nama} sang kesatria, kamu dapat menyerang dengan senjatamu!`);
        break;
    case "Tabib":
        console.log(`Halo ${nama} sang tabib, kamu akan membantu temanmu yang terluka.`);
        break;
    case "Penyihir":
        console.log(`Halo ${nama} sang penyihir, ciptakan keajaiban yang membantu kemenanganmu!`);
        break;
    default:
        console.log("Kamu jadi bot aja ya, peran yang kamu pilih ga ada.");
}