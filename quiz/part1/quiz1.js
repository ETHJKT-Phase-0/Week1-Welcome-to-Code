let nama = "caelum";
let peran = "Tabib"; 


/*
INPUT
IF nilai dan tipe datanya dari name sama dengan string kosong
menampilkan "nama wajib diisi"
ELSE IF nilai dan tipe datanya dari role sama dengan string kosong
menampilkan "pilih peranmu untuk memulai game"
ELSE IF nilai dan tipe datanya dari role sama dengan "Ksatria"
menampilkan halo Ksatria (name) , kamu dapat menyerang dengan senjatamu!
ELSE IF nilai dan tipe datanya dari role sama dengan "Tabib"
menampilkan halo Tabib (name) , kamu akan membantu temanmu yang terluka
ELSE IF nilai dan tipe datanya dari role sama dengan "Penyihir"
menampilkan halo Penyihir (name) , ciptakan keajaiban yang membantu kemenanganmu!
ELSE
menampilkan kayaknya kamu jadi bot aja ya, peran kamu yang kamu pilih ga ada
*/

function Proxytia() {
    if (nama === "") {
        console.log("nama wajib diisi!");
    } else if (peran === "") {
        console.log("pilih peranmu untuk memulai game");
    } else if (peran === 'Ksatria') {
        console.log(`halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu`);
    } else if (peran === 'Tabib') {
        console.log(`halo Tabib ${nama}, kamu akan membantu temanmu yang terluka`);
    } else if (peran === 'Penyihir') {
        console.log(`halo penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
    } else {
        console.log("Kayaknya kamu jadi bot aja, peran yang kamu pilih gak ada");
    }
}


Proxytia();