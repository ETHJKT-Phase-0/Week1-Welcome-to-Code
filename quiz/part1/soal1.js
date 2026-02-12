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
```
game Proxytia, permainan untuk memilih peran ksatria-tabib-penyihir
sesuai yang diinginkan 

input yang diperlukan adalah input dari variabel nama, dan peran
jadi pertama bakal cek variabel nama ada nilai/value/isinya apa engga,
kalo gaada isinya user dapet peringatan untuk namanya agar diisi terlebih dahulu

terus kalau namanya diisi, bakal di cek apakah si user udah ngasih peran,
kalo belum, bakal dapet peringatan untuk mengisi variabel peran sebelum memulai game
kalo sudah terisi nanti bakal si js bakal cari
peran apa yang dipilih, antara ksatria-tabib-penyihir dan bakal ngeluarin
outputnya masing masing

jika peran yang diisi bukan salah satu dari ksatria-tabib-penyihir,
maka akan diberitahu kalau mendingan jadi bot, karena pilihan tidak sesuai filter

contohnya membuat isi dari nama = "Felix", peran = "Ksatria" makaa output yang dikeluarkan
di dalam console adalah "halo Ksatria Felix , kamu dapat menyerang dengan senjatamu!"
```
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)


let nama = "", peran = "";
if (nama== ""){
    console.log (`nama wajib diisi!`);
} else if (peran == ""){
    console.log (`pilih peranmu untuk memulai game <3`);
} else if (peran == "Ksatria"){
    console.log (`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`);
} else if (peran == "Tabib"){
    console.log (`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`);
} else if (peran == "Penyihir"){
    console.log (`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`);
} else {
    console.log (`tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada ^^`);
}
//code disini gunakan console.log untuk outputnya