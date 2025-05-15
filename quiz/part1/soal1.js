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

// algoritma : untuk mengerjakan soal memerlukan variabel yaitu variabel 'let'agar variabel bisa diubah ubah
// kemudian untuk membuat peringatan "nama wajib diisi" ketika variabel nama tidak diisi/kosong menggunakan 'if' untuk membuat
//suatu kondisi lalu dengan 'console.log' untuk menampilkan pesan "nama wajib diisi"
//kemudian untuk membuat variabel peran menjadi"pilih peranmu untuk memulai game" maka diperlukan kondisi lain menggunakan 'else if'
//lalu dengan 'console.log' untuk memunculkan pesan"pilih peranmu untuk memulai game"
//kemudian untuk membuat variabel peran menjadi 3 kondisi yaitu (ksatria,tabib,penyihir)maka menggunakan 'else'untuk membuat kondisi lain selain 2 kondisi diatas
//kemudian didalam kondisi lain yaitu 'else' ditambahkan 'if,else if' untuk membuat kondisi peran menjadi 3 dan menggunakan 'console.log'untuk memberi pesan ketika
//memilih ksatria maka akan muncul pesan "halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!",agar pesan dapat menyebutkan nama pemain yg sudah diisi
//maka didalam 'console.log'menggunakan backtick agar mudah dalam memasukan variabel kedalam string,kemudian menggunakan '${nama}' agar nama yg telah dibuat/ditulis bisa masuk kedalam
//pesan ketika memilih salah satu dari ketiga peran tersebut.
//kemudian untuk menciptakan kondisi lain selain 3 kondisi(peran) diatas,maka menggunakan 'else' dan menggunkan 'console.log' untuk memberi pesan "kayaknya kamu jadi bot aja ya,peran yang kamu pilih tidak ada"
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!) 

let nama = 'sahrul'
let peran = 'ksatria'

if (nama === '') {
    console.log('nama wajib diisi')
} else if (peran === '') {
    console.log('pilih peranmu untuk memulai game')
} else {
    if (peran === 'ksatria') {
        console.log (`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`)
    } else if (peran === 'tabib') {
        console.log (`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`)
    } else if (peran === 'penyihir') {
        console.log (`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`)
    } else {
        console.log (`${nama} ,kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`)
    }
}



//code disini gunakan console.log untuk outputnya