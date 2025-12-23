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


let nama = "panjul", peran = "jokowi";

if (nama == ``) {
    console.warn(`nama wajib diisi`);
} else if (peran == ``) {
    console.warn('Pilih Peranmu untuk memulai game');
} else {
    switch(peran){
        case `Ksatria`:
            console.log(`${nama} Kamu dapat menyerang dengan senjatamu!`);
            break;
        case `Tabib`:
            console.log(`${nama} Kamu akan membantu temanmu yang terluka`);
            break;
        case `Penyihir`:
            console.log(`${nama} kamu dapat menciptakan kejadian yang membantu kemenanganmu`);
            break;
        default:
            console.log(`${nama}Kamu jadi bot aja ya, peran yang kamu pilih gak ada`);
    }
}
//code disini gunakan console.log untuk outputnya
