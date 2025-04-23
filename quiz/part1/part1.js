/*for(let i=0 ;  i <= 100 ;  i++){
    if (i % 28 === 0){
        console.log("FOURSEVEN");
    } 
    else if (i % 7 === 0){
        console.log("SEVEN");
    }
    else if(i % 4 === 0 ){
        console.log("FOUR");
    } else {
        console.log(i);
    }
}*/

//Soal NOMOR 1
console.log("soal nomor 1");
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

let peran="tabib";
let nama="toni";

function Proxytia(peran, nama){
    if(nama == null){
        console.log("nama wajib diisi!");
    } else if (peran === "Ksatria" || peran === "ksatria"){
        console.log(`halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
    } else if (peran === "Tabib" || peran === "tabib"){
        console.log(`halo Tabib ${nama}, kamu akan membantu temanmu yang terluka!`);
    } else if (peran === "Penyihir" || peran === "penyihir"){
        console.log(`halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
    } else{
        console.log(`${nama} kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`);
    }
}

Proxytia(peran, nama);

//code disini gunakan console.log untuk outputnya


//SOAL NOMOR 2
console.log();
console.log('soal nomor 2');
// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 3; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 1900; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//code switch case kamu disini
if(tanggal > 0 && tanggal <= 31){
switch (bulan) {
    case 1 :
        console.log(`${tanggal} Januari ${tahun}`);
        break;
    case 2 :
        console.log(`${tanggal} Februari ${tahun}`);
        break;   
    case 3 :
        console.log(`${tanggal} Maret ${tahun}`);
        break;
    case 4 :
        console.log(`${tanggal} April ${tahun}`);
        break;
    case 5 :
        console.log(`${tanggal} Mei ${tahun}`);
        break;
    case 6 :
        console.log(`${tanggal} Juni ${tahun}`);
        break;
    case 7 :
        console.log(`${tanggal} Juli ${tahun}`);
        break;
    case 8 :
        console.log(`${tanggal} Agustus ${tahun}`);
        break;
    case 9 :
        console.log(`${tanggal} September ${tahun}`);
        break;
    case 10 :
        console.log(`${tanggal} Oktober ${tahun}`);
        break;
    case 11 :
        console.log(`${tanggal} November ${tahun}`);
        break;
    case 12 :
        console.log(`${tanggal} Desember ${tahun}`);
    default :
        console.log("Anda salah memasukkan bulan")
}
} else {console.log('Masukkan tanggal yang benar')}
