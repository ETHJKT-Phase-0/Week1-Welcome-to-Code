let nama = "ucup";
let peran = "Maling";

if (nama === "") {
  console.log("nama wajib diisi");
} else if (peran === "") {
  console.log("Pilih peranmu untuk memulai game");
} else {
  if (peran === "Ksatria") {
    console.log(`halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
  } else if (peran === "Tabib") {
    console.log(`halo Tabib ${nama}, kamu akan membantu temanmu yang terluka`);
  } else if (peran === "Penyihir") {
    console.log(
      `halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`
    );
  } else {
    console.log(
      `Tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`
    );
  }
}
