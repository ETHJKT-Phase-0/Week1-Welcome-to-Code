// ## Soal 2
// ```js
// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal.
// Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

// let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
// let bulan = "februari"; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
// let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

let tanggal = 21;
let bulan = 1;
let tahun = 1945;

let month;

switch (bulan) {
  case 1:
    month = "Januari";
    break;
  case 2:
    month = "Februari";
    break;
  case 3:
    month = "Maret";
    break;
  case 4:
    month = "April";
    break;
  case 5:
    month = "Mei";
    break;
  case 6:
    month = "Juni";
    break;
  case 7:
    month = "Juli";
    break;
  case 8:
    month = "Agustus";
    break;
  case 9:
    month = "September";
    break;
  case 10:
    month = "Oktober";
    break;
  case 11:
    month = "November";
    break;
  case 12:
    month = "Desember";
    break;
}

if (tanggal < 1 || tanggal > 31) {
    console.log(`Tanggal yang anda masukkan salah`);
} else if (bulan < 1 || bulan > 12) {
    console.log(`Bulan yang anda masukkan salah`);
} else if (tahun < 1900 || tahun > 2200) {
    console.log(`Tahun yang anda masukkan salah`);
} else {
    console.log(`${tanggal} ${month} ${tahun}`);
}