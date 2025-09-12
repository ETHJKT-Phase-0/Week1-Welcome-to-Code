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

/* Jadi algoritma yang saya pakai adalah logika percabangan
jadi pertama saya akan mengecek apakah variabel nama itu kosong atau tidak
jika kosong maka akan menampilkan "nama wajib diisi"
jika tidak kosong maka akan lanjut ke pengecekan variabel peran
sama seperti variabel nama, jika variabel peran kosong maka akan menampilkan
"Pilih Peranmu untuk memulai game"
jika tidak kosong maka akan lanjut ke pengecekan value peran
nah tapi untuk yang ini saya menggunakan if else if else
karena ini tuh mirip dengan project yang saya pernah saya kerjakan yaitu pengklasifikasian nilai
jika peran adalah Ksatria maka akan menampilkan
"halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!" 
jika peran adalah Tabib maka akan menampilkan
"halo Tabib ${nama} , kamu akan membantu temanmu yang terluka"
jika peran adalah Penyihir maka akan menampilkan
"halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!"
jika peran bukan salah satu dari ketiga peran diatas maka akan menampilkan
"tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"
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
} 

if (peran === "") {
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