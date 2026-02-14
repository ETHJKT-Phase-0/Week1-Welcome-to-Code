// soal 2
// ```js
// // Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// // Gunakan switch case untuk kasus ini!

// // Contoh:

// // let hari = 21; let bulan = 1; let tahun = 1945;

// // Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

// //tips gunakan keyword ini di google "conditional switch case javascript"
// //dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 10; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = "01"; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2002; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

// //code switch case kamu disini
let namabulan;
switch (bulan) {
  case "01":
    namabulan = "januari";
    break;
  case "02":
    namabulan = "febuari";
    break;
  case "03":
    namabulan = "maret";
    break;
  case "04":
    namabulan = "april";
    break;
  case "05":
    namabulan = "mei";
    break;
  case "06":
    namabulan = "juni";
    break;
  case "07":
    namabulan = "juli";
    break;
  case "08":
    namabulan = "agustus";
    break;
  case "09":
    namabulan = "september";
    break;
  case "10":
    namabulan = "oktober";
    break;
  case "11":
    namabulan = "november";
    break;
  case "12":
    namabulan = "desember";
    break;
}
console.log(tanggal, namabulan, tahun);
