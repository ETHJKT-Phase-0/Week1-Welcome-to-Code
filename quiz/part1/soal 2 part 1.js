// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 3; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
let namaHari = "";
let namaBulan = "";
//code switch case kamu disini
switch (tanggal){
    case 1:
    case 8:
    case 15:
    case 22:
    case 29:
        namaHari = "Senin";
        break;
    case 2:
    case 9:
    case 16:
    case 23:
    case 30:
        namaHari = "Selasa";
        break;
    case 3:
    case 10:
    case 17:
    case 24:
    case 31:
        namaHari = "Rabu";
        break;
    case 4:
    case 11:
    case 18:
    case 25:
        namaHari = "Kamis";
        break;
    case 5:
    case 12:
    case 19:
    case 26:
        namaHari = "Juma'at";
        break;
    case 6:
    case 13 :
    case 20:
    case 27:
        namaHari = "Sabtu";
        break;
    case 7:
    case 14:
    case 21:
    case 28:
        namaHari = "Minggu";
        break;
    default:
        console.log("Tanggal tidak valid");
}

switch (bulan){
    case 1:
        namaBulan = "Januari";
        break;
    case 2:
        namaBulan = "Februari";
        break;
    case 3:
        namaBulan = "Maret";
        break;
    case 4:
        namaBulan = "April";
        break;
    case 5:
        namaBulan = "Mei";
        break;
    case 6:
        namaBulan = "Juni";
        break;
    case 7:
        namaBulan = "Juli";
        break;
    case 8:
        namaBulan = "Agustus";
        break;
    case 9:
        namaBulan = "September";
        break;
    case 10:
        namaBulan = "Oktober";
        break;
    case 11:
        namaBulan = "November";
        break;
    case 12:
        namaBulan = "Desember";
        break;
    default:
        console.log("Bulan tidak valid");
}

console.log(`${namaHari} ${namaBulan} ${tahun}`);