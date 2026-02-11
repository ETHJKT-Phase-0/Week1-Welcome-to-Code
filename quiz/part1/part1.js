
// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// yaitu nama dan peran. Variabel peran harus memiliki isi data, 
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel 
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//tips belajar penggunaan `` (backtick) pada javascript agar
//mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)


let nama = "", peran = "";

//code disini gunakan console.log untuk outputnya
if (nama === "") {
    console.log("Nama wajib diisi");
}
else if (peran === "") {
    console.log("Pilih peranmu untuk memulai game");
} else {
    switch (peran) {
        case "Ksatria":
            console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
            break;
        case "Tabib":
            console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka`);
            break;
        case "Penyihir":
            console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
            break;
        default:
            console.log(`Halo ${peran} ${nama}, peran yang kamu pilih ga ada`);
    }
}
```

## Soal 2
```js
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
switch (bulan) {
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
    default:
        console.log("Bulan tidak valid");
        break;
}

if (bulan >= 1 && bulan <= 12 && tanggal >= 1 && tanggal <= 31 && tahun >= 1900 && tahun <= 2200) {
    console.log(`${tanggal} ${bulan} ${tahun}`);
} else {
    console.log("Tanggal tidak valid");
}
let namaBulan;

switch(bulan) {
  case 1:
    namaBulan = "januari";
    break;
  case 2:
    namaBulan = "februari";
    break;
    case 3:
    namaBulan = "maret";
    break;
  case 4:
    namaBulan = "april";
    break;
  case 5:
    namaBulan = "mei";
    break;
  case 6:
    namaBulan = "juni";
    break;
  case 7:
    namaBulan = "juli";
    break;
  case 8:   
    namaBulan = "agustus";
    break;
  case 9:
    namaBulan = "september";
    break;
  case 10:  
    namaBulan = "oktober";
    break;
  case 11:
    namaBulan = "november";
    break;
  case 12:  
    namaBulan = "desember";
    break;
  default:
    namaBulan = "tanggaltidakvalid";
    break;
}
if (namaBulan != "tanggaltidakvalid" && tanggal >= 1 && tanggal <= 31 && tahun >=1900 && tahun <= 2200) {
  console.log(`${tanggal} ${namaBulan} ${tahun}`);
} else {
  console.log('tanggal tidak valid');
}
```
---
video biar rada paham lah, soalnya ini awal kepahitan ngoding wkwk:

[Video tutor by Harkon](https://youtu.be/-YlMePibR6Y)

*sisanya kalian googling aja ya ges yak*
