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

// memerika apakah value 'nama'
// jika di isi akan muncul pesan untuk memilih peran
// jika tidak di isi akan muncul peringatan wajib mengisi nama
// memerika value 'peran'
// jika di isi sesuai dengan value yang ditentukan yakni 'Ksatria' 'Tabib' dan 'Penyihir'
// maka akan muncul pesan sesuai dengan value peran yang dimasukan
// jika tidak di isi atau di isi dengan value diluar dari yang ditentukan maka akan muncul pesan peringatan untuk mejadi bot saja

//code disini gunakan console.log untuk outputnya

let nama = "", peran = "";

if (nama === "") {
    console.log("nama wajib di isi");
} else {
    console.log("pilih peranmu untuk memulai game.");
}

if (peran === "Ksatria") {
    console.log(`${nama} , kamu dapat menyerang dengan senjatamu!`);
} else if (peran === "Tabib") {
    console.log(`${nama} , kamu akan membantu temanmu yang terluka`);
} else if (peran === "Penyihir") {
    console.log(`${nama} , ciptakan keajaiban yang membantu kemenanganmu!`);
} else {
    console.log("tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada")
}

