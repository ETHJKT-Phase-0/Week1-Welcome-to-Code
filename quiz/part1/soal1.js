let nama = "rpn",
  peran = "Ksatria";
if (nama && peran) {
  if (peran === "Ksatria")
    console.log(
      `halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`
    );
  else if (peran === "Tabib")
    console.log(
      `halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`
    );
  else if (peran === "Tabib")
    console.log(
      `halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`
    );
  else {
    console.log(
      `tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`
    );
  }
} else if (!nama) {
  console.log(`nama wajib diisi`);
} else if (!peran) {
  console.log(`Pilih Peranmu untuk memulai game`);
}
