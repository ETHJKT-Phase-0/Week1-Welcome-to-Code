let nama = "John" 
let peran = 1 ;


console.log("Selamat datang di Dunia Proxytia, ");
if (nama === "" || peran === null) {
  console.log("Nama harus diisi!");
  console.log("Pilih Peranmu untuk memulai game!");
} else if (peran === 1) {
  console.log("Halo Ksatria "+nama+", kamu dapat menyerang dengan senjatamu!");
} else if (peran === 2) {         
    console.log("Halo Penyihir "+nama+", ciptakan keajaiban yang membantu kemenanganmu!");
}
else if (peran === 3) {
    console.log("Halo Tabib "+nama+", kamu akan membantu temanmu yang terluka.");
    }
else {
    console.log("kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"); 
}