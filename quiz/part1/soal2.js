//memasukkan tanggal
let hari = 15;
let bulan = 5;
let tahun = 1945;

let  namabulan ="";

//menentukan nama bulan
switch (bulan) {
    case 1:
        namabulan = "Januari"; //bulan januari
        break;
    case 2:
        namabulan = "Februari"; //bulan februari
        break;
    case 3:
        namabulan = "Maret"; //bulan maret
        break;
    case 4:
        namabulan = "April"; //bulan april
        break;
    case 5:
        namabulan = "Mei"; //bulan mei
        break;
    case 6:
        namabulan = "Juni"; //bulan juni
        break;
    case 7:
        namabulan = "Juli"; //bulan juli
        break;
    case 8:
        namabulan = "Agustus"; //bulan agustus
        break;
    case 9:
        namabulan = "September"; //bulan september
        break;
    case 10:
        namabulan = "Oktober"; //bulan oktober
        break;
    case 11:
        namabulan = "November"; //bulan november
        break;
    case 12:
        namabulan = "Desember"; //bulan desember
        break;
    default:
        namabulan = "Kayaknya ga ada deh"; //tidak terdeteksi
}

//menggabungkan hari + bulan + tahun
let tanggalLengkap = hari +" "+ namabulan +" "+ tahun;
console.log(tanggalLengkap);