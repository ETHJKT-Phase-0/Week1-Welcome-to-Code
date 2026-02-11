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

const prompt = require('prompt-sync')();

let nama = prompt("Masukkan nama pemain anda: ");
let peran = prompt("Masukkan peran anda (ksatria, tabib, dan penyihir: ");
let greeting = "";

if(nama === ""){
    console.log ("Nama wajib diisi");
} else if (peran === ""){
    console.log ("Peran wajib diisi untuk memulai game");
} else {
    if (peran === "ksatria"){
        greeting = `Kesatria ${nama}, kamu dapat menyerang dengan senjatamu!`;
    } else if (peran === "tabib"){
        greeting = `Tabib ${nama}, kamu akan membantu temanmu yang terluka!`;
    } else if (peran === "penyihir"){
        greeting = `Penyihir ${nama}, ciptakan keajaiban yang membawa kemenangan!`;
    } else {
        greeting = `Jadi bot aja lah ${nama}`;
    }
}

//CONTOH SOAL SELESAI
//code disini gunakan console.log untuk outputnya

console.log(greeting);
