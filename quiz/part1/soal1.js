/*## Soal 1:
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
//input nilai berupa string
//proses menjadi peran
//output
let nama = "", peran = "";

//code disini gunakan console.log untuk outputnya*/

//input
let pengenalan = alert("Tulis namamu bro"),
    nama = prompt(""),
    pilihperan = alert("Pilih peran: ksatria, tabib, penyihir")
    peran = prompt("")
    peran = peran.toLowerCase();// agar tidak mempedulikan huruf besar atau kecil pada input string

//proses menjadi peran
if (nama == ""){
    console.log(alert("nama wajib diisi"))
} else if (peran === "ksatria"){
    console.log( alert(`Hallo ${nama} pilih senjatamu untuk menyerang`))
} else if (peran === "tabib"){
    console.log(alert(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`))
} else if (peran === "penyihir"){
    console.log(alert(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`))
} else {
    alert("tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada")
}