// ## Soal 1:
/*```js
// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// yaitu nama dan peran. Variabel peran harus memiliki isi data, 
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel 
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
// ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
// halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
// halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
// halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
// tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
// tips belajar penggunaan `` (backtick) pada javascript agar
// mudah dalam memasukan variabel ke dalam string
// tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
// isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)

1. Inisialisasi Variabel
Buat dua variabel: nama dan peran.

2.Input Nama dan Peran
Minta pengguna untuk memasukkan nama dan simpan ke dalam variabel nama.
Minta pengguna untuk memilih peran (Ksatria, Tabib, atau Penyihir) dan simpan ke dalam variabel peran.

3.Validasi Input
Jika nama kosong:
Tampilkan pesan: "nama wajib diisi".
Jika peran kosong:
Tampilkan pesan: "Pilih Peranmu untuk memulai game".
Jika peran tidak termasuk dalam pilihan yang valid (Ksatria, Tabib, Penyihir):
Tampilkan pesan: "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada".

4.Tampilkan Respons Berdasarkan Peran
Jika peran adalah "Ksatria":
Tampilkan pesan: "halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!".
Jika peran adalah "Tabib":
Tampilkan pesan: "halo Tabib ${nama}, kamu akan membantu temanmu yang terluka".
Jika peran adalah "Penyihir":
Tampilkan pesan: "halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!".

5.Akhiri Program
Program selesai setelah menampilkan respons yang sesuai.

let nama = "", peran = "";

//code disini gunakan console.log untuk outputnya

```*/
let nama = "",
  peran = "";
if (nama == "") {
  console.log("nama wajib diisi");
} else if (peran == "") {
  console.log("pilih peranmu untuk memulai game");
} else {
  if (peran == "Ksatria") {
    console.log(
      `hallo ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`
    );
  } else if (peran == "tabib") {
    console.log(`hallo tabib ${nama}, kamu akan membantu temanmu yang terluka`);
  } else if (peran == "penyihir") {
    console.log(`hallo penyihir ${nama}, ciptakan keajaiban yang membantu`);
  } else {
    console.log(
      `tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`
    );
  }
}
