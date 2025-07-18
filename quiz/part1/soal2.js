// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. 
// Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = "februari"; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

let namaBulan="";
//code switch case kamu disini

switch (bulan) {
    case  "januari":
        namaBulan = 1;
        break;
    case "februari" :
        namaBulan = 2;
        break;
    case "maret" :
        namaBulan = 3;
        break;
    case "april":
        namaBulan = 4;
        break;
    case "mei" :
        namaBulan = 5;
        break;
    case "juni" :
        namaBulan = 6;
        break;
    case "juli" :
        namaBulan = 7;
        break;
    case "agustus":
        namaBulan = 8;
        break;
    case "september" :
        namaBulan = 9;
        break;
    case "oktober" :
        namaBulan = 10;
        break;
    case "november" :
        namaBulan = 11;
        break;
    case "desember" :
        namaBulan = 12;
        break;
    default:
        console.log("bulan yang anda ketik gk ada");
        break;
}
console.log(`${tanggal} + ${namaBulan} + ${tahun}`);
