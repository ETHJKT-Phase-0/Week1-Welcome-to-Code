/*# Conditional Statement | Part 1

oke kawan-kawan, disini kalian akan belajar yang namanya Conditional Statement, Logical Operator, dan Comparisons Operator.

singkatnya sih disini belajar if else, namun nanti ada soal yang dimana kamu harus belajar cara membaca dokumentasi dan cara belajar mandiri, yaitu soal bertema Switch hehe.

yak Buka aja W3school dan kerjakan soal soal berikut
*/

/*`Soal 1:
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
//tips belajar penggunaan  (backtick) pada javascript agar mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai
*/
`
// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)
//1. Membuat Judul Permainan dan warning note untuk nama dan peran
//2. Membuat variable nama dan peran
//3. Nama wajib diisi, buat kondisional pertama untuk memeriksa nama terisi atau tidak.
//4. Bila nama belum diisi, beri peringatan untuk wajib mengisinya.
//5. Bila nama tidak kosong dan peran tidak dikosong maka dibuat kondisional
//6. Kondisional yang disesuaikan penulisan peran yang dipilih.
//7. Case sensitive, jadi hati-hati input peran.
//8. Bila peran sesuai dengan Ksatria/Tabib/Penyihir, maka dikeluarkan output-
//9. -nama pemain dan fungsi peran yang dipilih.
//10. Bila peran tidak diisi atau tidak sesuai dengan 3 peran yang disebutkan,-
//11. maka pemain keluar pesan yang menyatakan bahwa pemain itu bot. 
`

//Input 
console.log("===Proxytia===");
console.log("Silahkan isi nama dan peran yang kamu suka.");
console.log("Peran yang dapat dipilh: Ksatria, Tabib, Penyihir");
console.log("===***===");

let nama = "Jotaro Kujo";
let peran = "Penyihir";

//check variable
if (nama == "") {
    console.log("Nama wajib diisi!");
} else if (nama != "" && peran != "") {
    if (peran == "Ksatria") {
        console.log("Halo Ksatria", nama, "kamu dapat menyerang dengan senjatamu!");
    } else if (peran == "Tabib") {
        console.log("Halo Tabib", nama, "kamu akan membantu temanmu yang terluka");
    } else if (peran == "Penyihir") {
        console.log("Halo Penyihir", nama, "ciptakan keajaiban yang membantu kemenanganmu!");
    } 
} else {
    console.log("Kamu jadi bot saja ya, peran yang kamu pilih tidak ada");
}
//test1

