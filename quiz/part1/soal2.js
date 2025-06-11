let tanggal = 20; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 2; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 1967; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

if(tanggal < 1 || tanggal > 31) {
  console.log("Tanggal tidak valid!");
} else if(bulan === 2 && tanggal > 29) {
  console.log("Tanggal tidak valid!");
} else if(bulan === 2 && tanggal === 29 && !(tahun % 4 === 0 && (tahun % 100 !== 0 || tahun % 400 === 0))) {
  console.log("Tanggal tidak valid! Tanggal 29 Februari hanya berlaku pada tahun kabisat.");
} else if((bulan === 4 || bulan === 6 || bulan === 9 || bulan === 11) && tanggal > 30) {
  console.log("Tanggal tidak valid!");
} else {
  switch(bulan) {
    case 1:
        console.log(`${tanggal} Januari ${tahun}`);
        break;
    case 2:
        console.log(`${tanggal} Februari ${tahun}`);
        break;
    case 3:
        console.log(`${tanggal} Maret ${tahun}`);
        break;
    case 4:
        console.log(`${tanggal} April ${tahun}`);
        break;
    case 5:
        console.log(`${tanggal} Mei ${tahun}`);
        break;
    case 6:
        console.log(`${tanggal} Juni ${tahun}`);
        break;
    case 7:
        console.log(`${tanggal} Juli ${tahun}`);
        break;
    case 8:
        console.log(`${tanggal} Agustus ${tahun}`);
        break;
    case 9:
        console.log(`${tanggal} September ${tahun}`);
        break;
    case 10:
        console.log(`${tanggal} Oktober ${tahun}`);
        break;
    case 11:
        console.log(`${tanggal} November ${tahun}`);
        break;
    case 12:
        console.log(`${tanggal} Desember ${tahun}`);
        break;
    default:
        // code block
    }
}

//algoritma
// 1. Cek apakah tanggal valid (antara 1 - 31)
// 2. Cek apakah bulan valid (antara 1 - 12)
// 3. Cek apakah tanggal 29 Februari valid (hanya pada tahun kabisat)
// 4. Cek apakah bulan April, Juni, September, November memiliki tanggal maksimal 30
// 5. Jika semua valid, tampilkan tanggal dalam format "tanggal bulan tahun"