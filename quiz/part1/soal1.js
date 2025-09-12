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

/* Jadi algoritma yang saya pakai adalah if else if 
if else if ini akan mengecek kondisi satu persatu secara berurutan
dimulai dari kondisi pertama, jika kondisi pertama terpenuhi
maka blok kode di dalamnya akan dijalankan, dan pengecekan kondisi
berhenti di situ. Namun, jika kondisi pertama tidak terpenuhi,
maka program akan melanjutkan ke kondisi berikutnya, dan seterusnya
sama seperti program klasifikasi nilai ulangan yang pernah saya buat
dan disini ada 6 kondisi yang harus di cek
1. jika nama kosong, maka tampilkan "nama wajib diisi"
2. jika peran kosong, maka tampilkan "Pilih Peranmu untuk memulai game"
3. jika peran adalah Ksatria, maka tampilkan "halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!"
4. jika peran adalah Tabib, maka tampilkan "halo Tabib ${nama} , kamu akan membantu temanmu yang terluka"
5. jika peran adalah Penyihir, maka tampilkan "halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!"
6. jika peran bukan salah satu dari ketiga peran diatas, maka tampilkan "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"
*/
let nama = "DIMAS", peran = "Tabib";


//code disini gunakan console.log untuk outputnya
if (nama === "") {
  console.log("nama wajib diisi");
} else if (peran === "") {
  console.log("Pilih Peranmu untuk memulai game");
} 

if (peran === "Ksatria") {
  console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`);
} else if (peran === "Tabib") {
  console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`);
} else if (peran === "Penyihir") {
  console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`);
} else {
  console.log("tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada");
}