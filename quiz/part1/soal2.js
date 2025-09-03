// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 30; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 9; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 1965; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

switch (bulan) {
    case 1: console.log(`\n${tanggal} Januari ${tahun}\n`); break;
    case 2: console.log(`\n${tanggal} Februari ${tahun}\n`); break;
    case 3: console.log(`\n${tanggal} Maret ${tahun}\n`); break;
    case 4: console.log(`\n${tanggal} April ${tahun}\n`); break;
    case 5: console.log(`\n${tanggal} Mei ${tahun}\n`); break;
    case 6: console.log(`\n${tanggal} Juni ${tahun}\n`); break;
    case 7: console.log(`\n${tanggal} Juli ${tahun}\n`); break;
    case 8: console.log(`\n${tanggal} Agustus ${tahun}\n`); break;
    case 9: console.log(`\n${tanggal} September ${tahun}\n`); break;
    case 10: console.log(`\n${tanggal} Oktober ${tahun}\n`); break;
    case 11: console.log(`\n${tanggal} November ${tahun}\n`); break;
    case 12: console.log(`\n${tanggal} Desember ${tahun}\n`); break;
    default: console.log(`\nMasukkan "angka" bulan yang valid yaitu "antara 1 - 12"\n`); break;
}