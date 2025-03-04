// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// yaitu nama dan peran. Variabel peran harus memiliki isi data, 
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel 
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
// ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
// halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
// halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
// halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
// tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
// tips belajar penggunaan `` (backtick) pada javascript agar
// mudah dalam memasukan variabel ke dalam string
// tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// Algoritma
/*
    1. Tahapan ini jika user tidak mengisi variabel nama maka akan muncul pesan "Nama wajib diisi"
    2. Selanjutnya, jika user sudah mengisi nama namun tidak mengisi variabel peran maka akan muncul pesan "Pilih Peranmu untuk memulai game"
    3. User jika sudah mengisi nama dan peran, maka akan ada ouput sesuai dengan nama dan peran
    4. Jika user tidak mengisi peran yang ada maka dianggap bot
*/

let nama = "Ucup", peran = "Tukang";

if (nama == ""){
    console.log("Nama wajib diisi")
} else if (peran == ""){
    console.log("Pilih Peranmu untuk memulai game")
} else {
    if (peran == "Ksatria"){
        console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`)
    } else if(peran == "Tabib"){
        console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka`)
    } else if(peran == "Penyihir"){
        console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`)
    } else {
        console.log(`${nama}, kamu jadi bot aja ya`)
    }
}