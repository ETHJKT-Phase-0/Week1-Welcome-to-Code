# Conditional Statement | Part 1

oke kawan-kawan, disini kalian akan belajar yang namanya Conditional Statement, Logical Operator, dan Comparisons Operator.

singkatnya sih disini belajar if else, namun nanti ada soal yang dimana kamu harus belajar cara membaca dokumentasi dan cara belajar mandiri, yaitu soal bertema Switch hehe.

yak Buka aja W3school dan kerjakan soal soal berikut

## Soal 1:
```js
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
//pemain wajib isi nama, pemain tidak mengisi nama  mendapatkan peringatan
//setelah pemain isi nama, pemain mengisi peran ada jenis peran 3 yaitu  ksatria,tabib dan penyihir
//pemain yang tidak mengisi peran akan menjadi rakyat biasa
// sudah mengisi peran nya pemain mendapat kan skil tergantung peran nya masing masing
//setelah itu pemain memasuki dunia game nya

let nama = "dapa", peran = "penyihir";

//code disini gunakan console.log untuk outputnya


if (nama === "" && peran === ""){
console.log("isi nama dan peran mu sebelum memulai game");
//isi nama
} else if (nama !== "" ){
console.log (nama +""+(" selamat datang di dunia game"));

}
/// isi peran
if (peran === "ksatria" || peran === "tabib" || peran === "penyihir"){
    console.log ('selamat kamu telah memilih peran kamu tuan '+ nama);
}  else if (peran === "") {
    console.log (nama +""+(" kamu tidak memilih peran, kamu menjadi rakyat biasa"));


    
} ///skill peran 

      if (peran === "ksatria") {
        console.log ("halo ksatria "+ nama +", kamu dapat menyerang dengan senjatamu");
    } else if (peran === "tabib") {
        console.log ("halo tabib "+ nama +", kamu akan membantu temanmu yang terluka");
    } else if (peran === "penyihir") {
        console.log ("halo penyihir "+ nama +", ciptakan keajaiban yang membantu kemenanganmu");
    }
  
    /// masuk dunia game
    if (nama !== "" && peran !== "") {
        console.log ("selamat datang di dunia game "+ nama);
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


    switch (tanggal) {
case 1: tanggal = "1"; break;    
  case 2: tanggal = "2"; break;
  case 3: tanggal = "3"; break;
  case 4: tanggal = "4"; break;
  case 5: tanggal = "5"; break;
  case 6: tanggal = "6"; break;
  case 7: tanggal = "7"; break;
  case 8: tanggal = "8"; break;
  case 9: tanggal = "9"; break;
  case 10: tanggal = "10"; break;
  case 11: tanggal = "11"; break;
   case 12: tanggal = "12"; break;    
  case 13: tanggal = "13"; break;
  case 14: tanggal = "14"; break;
  case 15: tanggal = "15"; break;
  case 16: tanggal = "16"; break;
  case 17: tanggal = "17"; break;
  case 18: tanggal = "18"; break;
  case 19: tanggal = "19"; break;
  case 20: tanggal = "20"; break;
  case 21: tanggal = "21"; break;
  case 22: tanggal = "22"; break;
   case 23: tanggal = "23"; break;    
  case 24: tanggal = "24"; break;
  case 25: tanggal = "25"; break;
  case 26: tanggal = "26"; break;
  case 27: tanggal = "27"; break;
  case 28: tanggal = "28"; break;
  case 29: tanggal = "29"; break;
  case 30: tanggal = "30"; break;
  case 31: tanggal = "31"; break;
  default : console.log("tanggal tidak valid");



}
    
if (tahun >= 1900 && tahun <= 2200) {


  switch (bulan) {
        case 1: bulan = "January"; break;
  case 2: bulan = "February"; break;    
  case 3: bulan = "March"; break;
  case 4: bulan = "April"; break;
  case 5: bulan = "May"; break;
  case 6: bulan = "June"; break;
  case 7: bulan = "July"; break;
  case 8: bulan = "August"; break;
  case 9: bulan = "September"; break;
  case 10: bulan = "October"; break;
  case 11: bulan = "November"; break;
  case 12: bulan = "December"; break;
     }

}

   

     console.log (tanggal + " " + bulan + " " + tahun);
```

---
video biar rada paham lah, soalnya ini awal kepahitan ngoding wkwk:

[Video tutor by Harkon](https://youtu.be/-YlMePibR6Y)

*sisanya kalian googling aja ya ges yak*
