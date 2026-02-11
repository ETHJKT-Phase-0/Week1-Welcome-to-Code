// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

function ngeloopPakeFor(arah) {
  if (!arah) {
    console.log("tolong diisi dengan milih 'maju' atau 'mundur'!");
  }

  if (arah.toLowerCase() === "maju") {
    let hasilMaju = "";
    for (let i = 1; i < 10; i++) {
      hasilMaju += i;
      hasilMaju += " ";
    }
    console.log("Hitungan maju -> " + hasilMaju);
  } else if (arah.toLowerCase() === "mundur") {
    let hasilMundur = "";
    for (let j = 10; j > 0; j--) {
      hasilMundur += j;
      hasilMundur += " ";
    }
    console.log("Hitungan mundur -> " + hasilMundur);
  } else {
    console.log(
      "pilihanlu kagak ada boss! pilih salah satu -> 'maju' atau 'mundur'!"
    );
  }
}

ngeloopPakeFor("maju");
ngeloopPakeFor("mundur");
ngeloopPakeFor("mabur");
