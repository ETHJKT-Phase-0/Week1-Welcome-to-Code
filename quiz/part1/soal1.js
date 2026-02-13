// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// yaitu nama dan peran. Variabel cperan harus memiliki isi data, 
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
// 1. buat variabel nama dan peran
// 2. cek apakah nama kosong
//    - jika iya tampilkan peringatan "nama wajib di isi"
// 3. cek apakah peran kosong
//    - jika iya tampilkan peringatan "pilih peranmu untuk memulai game"
// 4. cek isi variabel peran  
//    - jika peran ksatria tampilkan "halo ksatria ${nama}, kamu dapat menyerang dengan senjatamu!"
//    - jika peran tabib tampilkan "halo tabib ${nama}, kamu akan membantu temanmu yang terluka"
//    - jika peran penyihir tampilkan "halo penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!"
//    - jika peran selain itu tampilkan "kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"

let nama = "vperson", peran = "TABIB"

peran = peran.toLowerCase();
hasil = "";

if (nama == "") {
  hasil = "nama wajib di ini";
} else if (peran == "") {
  hasil = "pilih peranmu untuk memulai game";
} else {
  switch (peran) {
    case "ksatria":
      hasil = `halo ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`;
      break;
    case "tabib":
      hasil = `halo tabib  ${nama}, kamu akan membantu temanmu yang terluka`;
      break;
    case "penyihir":
      hasil = `halo penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`;
      break;
    default:
      hasil = `kayaknya kamu jadi bot aja yam peran yang kamu pilih ga ada`;
  }
}
//code disini gunakan console.log untuk outputnya
console.log(hasil);



// menggunakan readline
/*
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan nama: ", (nama) => {
  rl.question("Masukkan peran: ", (peran) => {
    let pesan = "";

    if (nama === "") {
      pesan = "nama wajib diisi";
    } else if (peran === "") {
      pesan = "pilih peranmu untuk memulai game";
    } else {
      switch (peran.toLowerCase()) {
        case "ksatria":
          pesan = `Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`;
          break;
        case "tabib":
          pesan = `Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka`;
          break;
        case "penyihir":
          pesan = `Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`;
          break;
        default:
          pesan = `Halo ${nama}, peran tidak dikenal`;
      }
    }

    console.log(pesan);
    rl.close();
  });
}); */