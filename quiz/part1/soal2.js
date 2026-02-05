let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 7; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. 
// Disini kamu diminta untuk membuat format tanggal. 
// Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. 
// Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

switch(bulan){
    case 1: console.log(`${tanggal} Januari ${tahun}`);
    break;
    case 2: console.log(`${tanggal} February ${tahun}`);
    break;
    case 3: console.log(`${tanggal} Maret ${tahun}`);
    break;
    case 4: console.log(`${tanggal} April ${tahun}`);
    break;
    case 5: console.log(`${tanggal} Mei ${tahun}`);
    break;
    case 6: console.log(`${tanggal} Juni ${tahun}`);
    break;
    case 7: console.log(`${tanggal} Juli ${tahun}`);
    break;
    case 8: console.log(`${tanggal} Agustus ${tahun}`);
    break;
    case 9: console.log(`${tanggal} September ${tahun}`);
    break;
    case 10: console.log(`${tanggal} Ocotober ${tahun}`);
    break;
    case 11: console.log(`${tanggal} November ${tahun}`);
    break;
    case 12: console.log(`${tanggal} Desember ${tahun}`);
    break;
    default: console.log("Masukkan bulan yang benar");

}
