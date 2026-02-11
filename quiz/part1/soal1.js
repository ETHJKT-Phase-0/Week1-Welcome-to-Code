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


let nama = "", peran = "";

//code disini gunakan console.log untuk outputnya

function proxytia(_nama, _peran){
    if(!_nama) {
        console.log("nama wajib isi bos");
    } else if(_nama) {
        if(!peran) {
            console.log(`${_nama} kamu jadi bot aja ya. lagian kamu perannya kosong.`);
        } else if(_peran === "Ksatria" || _peran === "ksatria") {
            console.log(`haloo ${_peran} ${_nama}, km dapat menyerang dengan senjatamu!!`);
        } else if(_peran === "Penyihir" || _peran === "penyihir") {
            console.log(`haloo ${_peran} ${_nama}, km ciptain keajaiban yang membantu kemenanganmu!`);
        } else if(_peran === "Tabib" || _peran === "tabib") {
            console.log(`haloo ${_peran} ${_nama}, km bantu temanmu yang terluka ya`);
        } else {
            console.log(`${_nama} kamu jadi bot aja ya. peran "${_peran}" yg km pilih gk ad woi.`);
        }
    }
}

nama = "Xx_Destroyer_xX";
peran = "ksatria";
proxytia(nama, peran);