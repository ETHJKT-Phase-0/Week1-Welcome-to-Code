alert("Selamat Datang di Dungeon");
let name = "", peran = "";
while (!name){
    name = prompt("silahkan masukan namamu disini")
    if (!name) {
        alert ("Maaf anda harus memasukan nama anda disini")
    }
}

peran = prompt("Silahkan pilih role yang ingin kalian Pakai! Ksatria? Tabib? atau Penyihir?")
if(!peran){
    alert("Maaf Tolong Pilih Peran untuk memulai permainan")
} else {
    switch (peran.toLowerCase()) {
        case "ksatria":
            alert(`Baiklah ${name} sebagai ksatria kau akan melawan naga di baris depan`)
            break;

        case "tabib":
            alert(`Halo Tabib ${name}, kamu akan membantu temanmu yang terluka`);
            break;

        case "penyihir":
            alert(`Halo Penyihir ${name}, ciptakan keajaiban yang membantu kemenanganmu!`);
            break;
        default:
            alert("Tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada");
            break;
    }
}
