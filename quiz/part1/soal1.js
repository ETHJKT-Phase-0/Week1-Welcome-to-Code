// SOAL 1
let nama = "", peran = "";

if (nama.trim() === "") {
    console.log('nama wajib diisi');
} else {
    console.log("pilih peranmu untuk memulai game");
}

if (peran === "Ksatria") {
    console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
} else if (peran === "Tabib") {
    console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka`)
} else if (peran === "Penyihir") {
    console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`)
} else if (peran.trim() === "") {
    console.log("tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada")
}

// Algoritma :
// memeriksa value nama apakah diisi atau tidak
// jika tidak diisi maka muncul peringatan "nama wajib diisi"
// jika diisi muncul pesan "pilih peranmu untuk memulai game"
// memerika value peran apakah diisi atau tidak
// jika mengisi peran "Ksatria" maka akan muncul pesan "Halo (value nama), kamu dapat menyerang dengan senjatamu!" 
// jika mengisi peran "Tabib" maka akan muncul pesan "Halo (value nama), kamu akan membantu temanmu yang terluka"
// jika mengisi peran "Penyihir" maka akan muncul pesan "Halo (value nama), ciptakan keajaiban yang membantu kemenanganmu!"
// jika peran tidak diisi atau diisi value diluar dari yang ditentukan maka muncul pesan "tapi kayanya kamu jadi bot aja ya, peran yang kamu pilih ga ada"
