// ## Soal 2
/* js
// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"

//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = "februari"; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//code switch case kamu disini
*/
let hari = 21;
let bulan = 1;
let tahun = 2323;

switch (bulan) {
    case 1:
        if (hari < 1 || hari > 31) {
            console.log("Bulan Januari hanya memiliki 31 hari");
            } else if(tahun < 1900 || tahun > 2200) {
                console.log("Tidak ada data pada tahun tersebut");
            } else {
                console.log(`${hari} Januari ${tahun}`);
                }
        break;
    case 2:
        if (hari < 1 || hari > 28) {
            console.log("Bulan Februari hanya memiliki 28 hari");
            } else if(tahun < 1900 || tahun > 2200) {
                console.log("Tidak ada data pada tahun tersebut");
            } else {
                console.log(`${hari} Februari ${tahun}`);
                }
        break;
    case 3:
        if (hari < 1 || hari > 31) {
            console.log("Bulan Maret hanya memiliki 31 hari");
            } else if(tahun < 1900 || tahun > 2200) {
                console.log("Tidak ada data pada tahun tersebut");
            } else {
                console.log(`${hari} Maret ${tahun}`);
                }
        break;
    case 4:
        if (hari < 1 || hari > 30) {
            console.log("Bulan April hanya memiliki 30 hari");
            } else if(tahun < 1900 || tahun > 2200) {
                console.log("Tidak ada data pada tahun tersebut");
            } else {
                console.log(`${hari} April ${tahun}`);
                }
        break;
    case 5:
        if (hari < 1 || hari > 31) {
            console.log("Bulan Mei hanya memiliki 31 hari");
            } else if(tahun < 1900 || tahun > 2200) {
                console.log("Tidak ada data pada tahun tersebut");
            } else {
                console.log(`${hari} Mei ${tahun}`);
                }
        break;
    case 6:
        if (hari < 1 || hari > 30) {
            console.log("Bulan Juni hanya memiliki 30 hari");
        } else if(tahun < 1900 || tahun > 2200) {
            console.log("Tidak ada data pada tahun tersebut");
        } else {
            console.log(`${hari} Juni ${tahun}`);
            }
        break;
    case 7:
        if (hari < 1 || hari > 31) {
            console.log("Bulan Juli hanya memiliki 31 hari");
            } else if(tahun < 1900 || tahun > 2200) {
                console.log("Tidak ada data pada tahun tersebut");
            } else {
                console.log(`${hari} Juli ${tahun}`);
                }
        break;
    case 8:
        if (hari < 1 || hari > 31) {
            console.log("Bulan Agustus hanya memiliki 31 hari");
            } else if(tahun < 1900 || tahun > 2200) {
                console.log("Tidak ada data pada tahun tersebut");
            } else {
                console.log(`${hari} Agustus ${tahun}`);
                }
    break;
    case 9:
        if (hari < 1 || hari > 30) {
            console.log("Bulan September hanya memiliki 30 hari");
            } else if(tahun < 1900 || tahun > 2200) {
                console.log("Tidak ada data pada tahun tersebut");
            } else {
                console.log(`${hari} September ${tahun}`);
                }
    break;
    case 10:
        if (hari < 1 || hari > 31) {
            console.log("Bulan Oktober hanya memiliki 31 hari");
            } else if(tahun < 1900 || tahun > 2200) {
                console.log("Tidak ada data pada tahun tersebut");
            } else {
                console.log(`${hari} Oktober ${tahun}`);
                }
    break;
    case 11:
        if (hari < 1 || hari > 30) {
            console.log("Bulan November hanya memiliki 30 hari");
            } else if(tahun < 1900 || tahun > 2200) {
                console.log("Tidak ada data pada tahun tersebut");
            } else {
                console.log(`${hari} November ${tahun}`);
                }
    break;
    case 12:
        if (hari < 1 || hari > 31) {
            console.log("Bulan Desember hanya memiliki 31 hari");
            } else if(tahun < 1900 || tahun > 2200) {
                console.log("Tidak ada data pada tahun tersebut");
            } else {
                console.log(`${hari} Desember ${tahun}`);
                }
    break;
    default:
        console.log("Bulan tidak valid");
        break;
}