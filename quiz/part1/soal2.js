// Kamu akan diberikan sebuah bulan dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format bulan. Misal bulan yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 12; // assign nilai variabel bulan disini! (dengan angka antara 1 - 31)
let bulan = "februari"; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
switch(bulan) {
  case "januari":
    bulan = 1;
    break;
  case "februari":
    bulan = 2;
    break;
  case "maret":
    bulan = 3;
    break;
  case "april":
    bulan = 4;
    break;
  case "mei":
    bulan = 5;
    break;
  case "juni":
    bulan = 6;
    break;
  case "juli":
    bulan = 7;
    break;
  case "agustus":
    bulan = 8;
    break;
  case "september":
    bulan = 9;
    break;
  case "oktober":
    bulan = 10;
    break;
  case "november":
    bulan = 11;
    break;
  case "desember":
    bulan = 12;
    break;
}
console.log(`${tanggal} ${bulan} ${tahun}`);
//code switch case kamu disini