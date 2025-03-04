/*
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
 */

let nama = "Ammar";
let peran = "petarung";

//code disini gunakan console.log untuk outputnya

console.log("WELCOME TO PROXYTIA")
if (nama){
    if(peran){
        if(peran === "Ksatria"){
            console.log(`Hello Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`)
            }else if (peran === "Tabib"){
                console.log(`Halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`)
            }else if (peran === "Penyihir"){
                console.log(`Halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`)
                }else{
                    console.log(`Hello ${nama}, Tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`)
                    }
    }else{
        console.log(`Hello ${nama}, Pilih Peranmu untuk memulai game`)
    }

}else{
    console.log("Nama Wajib Diisi !!!")
}

// ALGORITMA

// 1. Cek apakah nama sudah diisi ?
// 2. Jika nama sudah diisi, cek apakah peran sudah diisi ?
// 3. Jika peran sudah diisi, cek apakah peran yang dipilih adalah Ksatria, Tabib, atau Penyihir ?
// 4. Jika peran yang dipilih adalah Ksatria, Tabib, atau Penyihir, tampilkan pesan yang sesuai dengan peran tersebut.
// 5. Jika peran yang dipilih bukan Ksatria, Tabib, atau Penyihir, tampilkan pesan bahwa peran yang dipilih tidak ada.
// 6. Jika peran belum diisi, tampilkan pesan untuk memilih peran.
// 7. Jika nama belum diisi, tampilkan pesan bahwa nama wajib diisi.
// 8. Jika nama dan peran sudah diisi, tampilkan pesan untuk memulai game.
// 9. Jika nama dan peran belum diisi, tampilkan pesan untuk memilih peran.
