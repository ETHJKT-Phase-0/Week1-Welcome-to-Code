
// Soal 1
// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// yaitu nama dan peran. Variabel peran harus memiliki isi data, 
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel 
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//halo Ksatria {nama} , kamu dapat menyerang dengan senjatamu!
//halo Tabib {nama} , kamu akan membantu temanmu yang terluka
//halo Penyihir {nama} , ciptakan keajaiban yang membantu kemenanganmu! 
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//tips belajar penggunaan `` (backtick) pada javascript agar
//mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)
// Algoritma Program sebagai berikut : 
/*
1. buat 2 variabel berupa nama dan peran
2. lalu variabel tersebut akan dideteksi
3. jika variabel {nama} kosong maka akan muncul tulisan nama wajib diisi, yang artinya ya namanya wajib ada
4. jika sudah diisi lanjut ke program berikutnya yaitu peran, untuk peran ada 3 yaitu ksatria, tabib, penyihir. 
5. jika {peran} tidak memiliki value maka program akan menyuruh wajib mengisi peran
6. lalu ketika {peran} diisi dengan ksatria maka akan muncul output sebagai : halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
7. jika {peran} diisi dengan tabib maka akan muncul output sebagai : halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
8. jika {peran} diisi dengan penyihir maka akan muncul output sebagai : halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
9. tapi jika {peran} diisi dengan diluar 3 opsi tersebut maka akan muncul output sebagai berikut : tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
*/


let nama = "", peran = "";

//code disini gunakan console.log untuk outputnya
nama = "Irham";
peran = "Ksatria";
console.log(`Masukan nama : ${nama}`);

console.log("Selamat datang di game Proxytia!");
console.log("================================");

if (nama === "") {
    console.log("nama wajib diisi");
} else if(nama !== null){
    console.log(`Halo ${nama}, pilih peranmu untuk memulai game!`);
    console.log();
    console.log(`Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir.`);
    if(peran === ""){
        console.log("Tolong isi peran sesuai dengan pilihan");
    }else if(peran === "Ksatria"){
        console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`);
    }else if(peran === "Tabib"){
        console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`);
    }else if(peran === "Penyihir"){
        console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`);
    }else{
        console.log("tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada");
    }
}

