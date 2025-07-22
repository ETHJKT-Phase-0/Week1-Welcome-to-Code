let nama = "",
  peran = ""; //   Kesatria, Tabib, Penyhir

if (nama === "") {
  console.log("Nama harus diisi!");
} else if (peran === "") {
  console.log(
    "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"
  );
} else {
  console.log(`halo ${peran} ${nama} , kamu dapat menyerang dengan senjatamu!`);
}
