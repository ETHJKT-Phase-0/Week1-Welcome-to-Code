// // ## Soal 1:
// ```js
// // Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// // Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// // yaitu nama dan peran. Variabel peran harus memiliki isi data, 
// // bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// // bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// // Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
// // Tugas Anda adalah untuk membuat program yang mengecek isi variabel 
// // peran serta mengeluarkan respon sesuai isi variabel tersebut.
// //ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
// //halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
// //halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
// //halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
// //tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
// //tips belajar penggunaan `` (backtick) pada javascript agar
// //mudah dalam memasukan variabel ke dalam string
// //tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// // algoritma
// //isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)

/* cara memasukkan peran sesuai game
pertama player harus memasukan nama player terlebih dahulu
jika player tidak mengisi namanya muncul peringatan:
"nama wajib diisi"

lalu pemain harus mengisi peran yang ingin dia pilih
jika kosong pemain diberi peringatan:
"Pilih peranmu untuk memulai game"

terdapat 3 peran yaitu ksatria,tabib, dan penyihir
lalu setiap 3 peran itu jika dipilih memiliki respon

halo Ksatria (nama player) , kamu dapat menyerang dengan senjatamu
halo Tabib (nama player) , kamu akan membantu temanmu yang terluka
halo Penyihir (nama player) , ciptakan keajaiban yang membantu kemenanganmu!

jika player tidak megisi peran respon nya:
tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada


*/

// let nama = "", peran = "";

// //code disini gunakan console.log untuk outputnya

let nama = "asep", peran = "";

if (nama === ''){
    console.log('Nama wajib diisi');
} else if(peran === ''){
    console.log('tolong masukkan peran');
};

if (peran === 'ksatria'){
    console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`)
} else if (peran === 'tabib'){
    console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`)
} else if (peran === 'penyihir'){
    console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`)
} else {
    console.log('tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada')
};