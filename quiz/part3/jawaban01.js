// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

function ngeloop(arah) {
  if (!arah) {
    console.log("tolong diisi dengan milih 'maju' atau 'mundur'!");
  }

  if (arah.toLowerCase() === "maju") {
    let hasilMaju = "";
    let i = 1;
    while (i < 10) {
      hasilMaju += i;
      hasilMaju += " ";
      i++;
    }
    console.log("Hitungan maju -> " + hasilMaju);
  } else if (arah.toLowerCase() === "mundur") {
    let hasilMundur = "";
    let j = 10;
    while (j > 0) {
      hasilMundur += j;
      hasilMundur += " ";
      j--;
    }
    console.log("Hitungan mundur -> " + hasilMundur);
  } else {
    console.log(
      "pilihanlu kagak ada boss! pilih salah satu -> 'maju' atau 'mundur'!"
    );
  }
}

ngeloop("maju");
ngeloop("mundur");
ngeloop("mabur");
