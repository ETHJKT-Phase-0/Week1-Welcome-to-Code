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

// Algoritma Program Game Proxytia
// 1. Mulai program.
// 2. Deklarasikan dua variabel:
//     nama untuk menyimpan nama pemain.
//     peran untuk menyimpan peran pemain.
// 3. Periksa apakah variabel nama kosong.
//    - Jika nama kosong → tampilkan pesan:
//      "Nama wajib diisi!"
// 4. Jika nama tidak kosong, periksa apakah peran kosong.
//    - Jika peran kosong → tampilkan pesan:
//      "Pilih peranmu untuk memulai game!"
// 6. Jika peran tidak kosong, tentukan pesan sesuai peran yang dipilih:
//    - Jika peran adalah "Ksatria" → tampilkan:
//      "Halo Ksatria [nama], kamu dapat menyerang dengan senjatamu!"
//    - Jika peran adalah "Tabib" → tampilkan:
//      "Halo Tabib [nama], kamu akan membantu temanmu yang terluka."
//    - Jika peran adalah "Penyihir" → tampilkan:
//      "Halo Penyihir [nama], ciptakan keajaiban yang membantu kemenanganmu!"
//    - Jika peran bukan salah satu dari tiga di atas → tampilkan:
//      "Tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada."
// 7. Selesai.


//code disini gunakan console.log untuk outputnya
let nama="Wahyu"; let peran="Ksatria";

if(nama===""){
    console.log("Nama wajib di isi");
}
else if(peran ===""){
    console.log("Pilih peranmu untuk memulai game");
}
else{
    if(peran==="Ksatria"){
        console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`);
    }
    else if(peran==="Tabib"){
        console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`);
    }
    else if(peran==="Penyihir"){
        console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`);
    }
    else{
        console.log("Tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada.");
    }
}

// SOAL PERTAMA SELESAI