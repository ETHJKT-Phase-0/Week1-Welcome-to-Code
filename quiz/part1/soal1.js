//algoritma
//1. cek apakah nama kosong, jika kosong maka akan muncul nama wajib diisi
//2. cek apakah peran kosong, jika peran kosong maka akan muncul pilih peranmu untuk memulai game
//3. cek apakah perannya ksatria, jika iya maka akan menampilkan halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//4. cek apakah perannya tabib, jika iya maka akan menampilkan halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//5. cek apakah perannya penyihir, jika iya maka akan menampilkan halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//6. cek apakah peran sesuai dengan yang tersedia, jika tidak maka akan menampilkan bahwasanya anda disuruh jadi bot

let nama = "alex", peran = "ksatria";

if (nama === "") {
    console.log("nama wajib diisi");
} else if (peran === "") {
    console.log("pilih peranmu untuk memulai game");
} else {
    if (peran === "ksatria") {
       console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`);
    }else if (peran === "tabib") {
        console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`);
    }else if (peran === "penyihir") {
        console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`);
    }else {
        console.log(`tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`);
    }
}
