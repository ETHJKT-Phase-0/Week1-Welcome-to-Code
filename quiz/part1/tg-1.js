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
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!) Algoritma
//Buat variabel nama dan peran, lalu isi dengan nilai tertentu (bisa kosong atau tidak).
//Periksa apakah nama kosong:
//Jika nama kosong, tampilkan pesan "Nama wajib diisi" dan hentikan program.
//Periksa apakah peran kosong:
//Jika peran kosong, tampilkan pesan "Pilih Peranmu untuk memulai game" dan hentikan program.
//Cek isi variabel peran:
//Jika peran adalah "Ksatria", tampilkan pesan "Halo Ksatria (nama), kamu dapat menyerang dengan senjatamu!"
//Jika peran adalah "Tabib", tampilkan pesan "Halo Tabib (nama), kamu akan membantu temanmu yang terluka!"
//Jika peran adalah "Penyihir", tampilkan pesan "Halo Penyihir (nama), ciptakan keajaiban yang membantu kemenanganmu!"
//Jika peran bukan salah satu dari tiga pilihan di atas, tampilkan pesan "Tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"


const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

rl.question("nama: ", function(nama) {
    if (!nama) {
        console.log("nama wajib diisi");
    rl.close();
    return;
}

rl.question("Pilih peran (Ksatria/Tabib/Penyihir): ", function(peran) {
    if (!peran) {
        console.log("Pilih Peranmu untuk memulai game")
    
    } else {
        peran = capitalize(peran)
    
    } if (peran === "Ksatria") {
        console.log (`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`)
    } else if (peran === "Tabib") {
        console.log (`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka!`)
    } else if (peran === "Penyihir") {
        console.log (`Halo Pernyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`)
    } else {
        console.log ("Tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada")
    }

        rl.close();
    });
});

    