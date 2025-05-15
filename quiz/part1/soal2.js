const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("\n===Soal 2===");

readline.question("Masukkan tanggal (1-31): ", (inputTanggal) => {
    const tanggal = parseInt(inputTanggal);

    readline.question("Masukkan bulan (1-12): ", (inputBulan) => {
        const bulan = parseInt(inputBulan);

        readline.question("Masukkan tahun (contoh: 2001): ", (inputTahun) => {
            const tahun = parseInt(inputTahun);

            let namaBulan = "";
            switch (bulan) {
                case 1: namaBulan = "Januari"; break;
                case 2: namaBulan = "Februari"; break;
                case 3: namaBulan = "Maret"; break;
                case 4: namaBulan = "April"; break;
                case 5: namaBulan = "Mei"; break;
                case 6: namaBulan = "Juni"; break;
                case 7: namaBulan = "Juli"; break;
                case 8: namaBulan = "Agustus"; break;
                case 9: namaBulan = "September"; break;
                case 10: namaBulan = "Oktober"; break;
                case 11: namaBulan = "November"; break;
                case 12: namaBulan = "Desember"; break;
                default:
                    console.log("Bulan tidak valid");
            }

            if (namaBulan && tanggal >= 1 && tanggal <= 31 && tahun > 0) {
                console.log(`${tanggal} ${namaBulan} ${tahun}`);
            } else {
                console.log("Tanggal, bulan, atau tahun tidak valid");
            }

            console.log("\n");

            readline.close();
        });
    });
});
