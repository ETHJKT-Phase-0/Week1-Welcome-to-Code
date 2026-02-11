// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

const prompt = require('prompt-sync')();
//code switch case kamu disini

let tanggal = prompt("Masukkan tanggal 1-31: ");
let bulan = parseInt(prompt("Masukkan bulan 1-12: "));
let tahun = prompt("Masukkan tahun: ");

switch (bulan){
    case 1:
        bulan = "Januari";
    case 2:
        bulan = "Februari";z
    case 3:
        bulan = "Maret";
    case 4:
        bulan = "April";
    case 5:
        bulan = "Mei";
    case 6:
        bulan = "Juni";
    case 7:
        bulan = "Juli";
    case 8:
        bulan = "Agustus";
    case 9:
        bulan = "September";
    case 10:
        bulan = "Oktober";
    case 11:
        bulan = "November";
    case 12:
        bulan = "Desember";
}

let rangkaianTanggal = `${tanggal} ${bulan} ${tahun}`;
console.log(rangkaianTanggal);
