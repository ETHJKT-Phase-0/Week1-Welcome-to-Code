// # Conditional Statement | Part 1

// oke kawan-kawan, disini kalian akan belajar yang namanya Conditional Statement, Logical Operator, dan Comparisons Operator.

// singkatnya sih disini belajar if else, namun nanti ada soal yang dimana kamu harus belajar cara membaca dokumentasi dan cara belajar mandiri, yaitu soal bertema Switch hehe.

// yak Buka aja W3school dan kerjakan soal soal berikut

// ## Soal 1:
//js
// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya.
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang),
// yaitu nama dan peran. Variabel peran harus memiliki isi data,
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila peran kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game".
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

let nama = "CC",
  peran = "ngeng";
let prompt = "";
if (nama === "") {
  prompt = "nama wajib diisi";
} else if (peran === "") {
  prompt = "pilih peranmu untuk memulai game";
} else {
  switch (peran.toLowerCase()) {
    case "ksatria":
      prompt = `Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`;
      break;
    case "tabib":
      prompt = `Halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`;
      break;
    case "penyihir":
      prompt = `Halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`;
      break;
    default:
      prompt = `Halo ${nama}, tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`;
  }
}

//code disini gunakan console.log untuk outputnya
console.log(prompt);
