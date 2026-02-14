const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("\n===Soal 1===");

readline.question("Masukkan nama: ", (nama) => {
    if (nama === "") {
        console.log("nama wajib diisi");
        readline.close();
        return;
    }

    readline.question("Masukkan peran: ", (peran) => {
        if (peran === "") {
            console.log("Pilih Peranmu untuk memulai game");
        } else {
            switch (peran.toLowerCase()) {
                case "ksatria":
                    console.log(`halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
                    break;
                case "tabib":
                    console.log(`halo Tabib ${nama}, kamu akan membantu temanmu yang terluka`);
                    break;
                case "penyihir":
                    console.log(`halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
                    break;
                default:
                    console.log("tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada");
            }
        }

        console.log("\n");

        readline.close();
    });
});
