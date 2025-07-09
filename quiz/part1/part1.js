// soal 1
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
// 1. Cek Variabel `nama` apakah variabel kosong?
    // -jika kosong tampilkan peringatan berupa "nama wajib diisi"
// 2. Jika variabel `nama` tidak kosong cek apakah variabel `peran` kosong
     // -jika kosong tampilkan "pilih peranmu untuk memulai game"
// 3. Jika peran adalah Ksatria, Tabib, Penyihir
    // -maka tampilkan teks sesuai peran
// 4. Jika peran tidak dikenali maka tampilkan "tapi kayaknya kamu jadi bot aja ya, soalnya peran yang kamu pilih ga ada"
    //isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)





    


//code disini gunakan console.log untuk outputnya
let nama = "", peran = "";

if(nama === ""){
    console.log("Nama wajib diisi")
}else if(peran === ""){
    console.log("Pilih peranmu untuk memulai game")
}else {
    if(peran === "Ksatria"){
        console.log(`Halo Ksatria ${nama}, "kamu dapat menyerang dengan senjatamu!`)
    }else if(peran === "Tabib"){
        console.log(`halo Tabib ${nama}, kamu akan membantu temanmu yang terluka`)
    }else if(peran === "Penyihir"){
        console.log(`halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`)
    }
else {
    console.log(`halo ${nama}, tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`)
}
}


// soal 2
// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. 
// Disini kamu diminta untuk membuat format tanggal. 
// Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 1; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
//code switch case kamu disini

let namaBulan;
switch(bulan){
    case 1 :
        namaBulan=("januari")
        break;
    case 2 :
        namaBulan=("februari")
        break;
    case 3 :
        namaBulan=("maret")
        break;
    case 4 :
        namaBulan=("april")
        break;
    case 5 :
        namaBulan=("mei")
        break;
    case 6 :
        namaBulan=("juni")
        break;
    case 7 :
        namaBulan=("juli")
        break;
    case 8 :
        namaBulan=("agustus")
        break;
    case 9 :
        namaBulan=("september")
        break;
    case 10 :
        namaBulan=("oktober")
        break;
    case 11 :
        namaBulan=("november")
        break;
    case 12 :
        namaBulan=("desember")
        break;
}
    console.log(`${tanggal}  ${namaBulan}  ${tahun}`);
