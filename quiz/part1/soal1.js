// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// yaitu nama dan peran. Variabel peran harus memiliki isi data, 
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila peran kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
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

// let nama = "Fitra";
// let peran = "  ";

// if(nama === ""){
//     console.log("Nama Wajib Di isi")
// }else if(peran === ""){
//     console.log("Pilih peranmu untuk memulai game")
// }else if(peran === "Ksatria"){
//     console.log(`halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu`)
// }else if (peran === "Tabib"){
//     console.log(`halo Tabib ${nama}, kamu akan membantu temanmu yang terluka`)
// }else if (peran === "Penyihir"){
//     console.log(`halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu`)
// }else {
//     console.log("Kamu jadi bot aja ya, Peran yang kamu pilih ga ada ")
// }

let nama  = "Fitra";
let peran = "Tabib";

if(!nama ||nama.trim() === ""){
    console.log("Nama Wajib Di isi")
}else if(!peran || peran.trim() === ""){
    console.log("Pilih peranmu untuk memulai game")
}else {
    console.log("Selamat Datang di game Proxytia")
      console.log("--------------------------------")

if (peran === "Ksatria"){
    console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu`)
}else if(peran === "Tabib"){
    console.log(`Halo Tabib ${nama}, kamu dapat membantu temanmu yang terluka`)
}else if(peran === "Penyihir"){
    console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu`)
}else {
    console.log("Kamu jadi BOT AJA YA, Peran yang kamu pilih ga ada ")
}

}
//Selesaii


//code disini gunakan console.log untuk outputnya
