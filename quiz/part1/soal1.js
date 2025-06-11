let nama = "Noel", peran = "Starbreaker";

let daftarPeran = ["Penyihir", "Ksatria", "Tabib"];

if(!nama){
    console.log("Nama wajib diisi!");
} else if(nama && !peran){
    console.log(`Pilih Peranmu untuk memulai game!`);
} else if(nama && peran && daftarPeran.includes(peran)){
    if(peran === "Penyihir"){
        console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
    } else if(peran === "Ksatria"){
        console.log(`Halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`);
    } else if(peran === "Tabib"){
        console.log(`Halo Tabib ${nama} , kamu akan membantu temanmu yang terluka!`);
    }
}else {
    console.log(`kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`);
}

//algoritma
// 1. Cek apakah nama diisi, jika tidak tampilkan pesan "Nama wajib diisi!"
// 2. Cek apakah nama diisi dan peran tidak diisi, jika ya tampilkan pesan "Pilih Peranmu untuk memulai game!"
// 3. Cek apakah peran sesuai dengan daftarPeran, jika ya tampilkan pesan sesuai peran
// 4. Jika peran tidak sesuai dengan daftarPeran, tampilkan pesan "kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"