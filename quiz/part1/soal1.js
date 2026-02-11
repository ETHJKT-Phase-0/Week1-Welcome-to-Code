// algoritma
/*
ada 2 variabel nama dan peran
jika nama tidak ada namun peran ada, maka akan muncul pesan "nama wajib diisi"
dan peran tidak akan dijalankan
jika nama ada namun peran tidak ada, maka akan muncul pesan "Pilih Peranmu untuk memulai game"
jika nama ada dan peran ada, maka akan muncul pesan sesuai peran yang dipilih
kalo ksatria maka akan muncul pesan `halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`
kalo Tabib maka akan muncul pesan `halo Tabib ${nama}, kamu akan membantu temanmu yang terluka`
kalo Penyihir maka akan muncul pesan `halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`
kalo peran yang dipilih tidak ada maka akan muncuk pesan "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"
*/

let nama = "ryu", peran = "Penyihir";
//code disini gunakan console.log untuk outputnya
if (nama === ""){
    console.log("nama wajib diisi");
}else{
    if(peran === ""){
        console.log("Pilih Peranmu untuk memulai game");
    } else if(peran === "Ksatria"){
        console.log(`halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
    } else if(peran === "Tabib"){
        console.log(`halo Tabib ${nama}, kamu akan membantu temanmu yang terluka`);
    }else if(peran === "Penyihir"){
        console.log(`halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
    }else{
        console.log("tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada");
    }
}