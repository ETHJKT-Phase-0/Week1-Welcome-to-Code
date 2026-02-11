// Soal 1

const prompt = require('prompt-sync')();
const nama = prompt("Masukan nama Anda = ");
const peran = prompt("Pilih Peranmu untuk memulai game (Kesatria / Tabib / Penyihir) = ");


if (!nama) {
    console.log("Nama wajib diiisi");
} else if (!peran) {
    console.log("Pilih Peranmu untuk memulai game");
} else if (peran === "Ksatria") {
    console.log(`Halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`);
} else if (peran === "Tabib") {
    console.log(`halo tabib ${nama} , kamu akan membantu temanmu yang terluka`);
} else if (peran === "Penyihir") {
    console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`);
} else {
    console.log(`Peran yang kamu pilih tidak ada, kamu jadi bot aja`);
}

