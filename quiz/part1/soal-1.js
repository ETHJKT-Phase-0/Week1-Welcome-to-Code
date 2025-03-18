// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya.
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang),
// yaitu nama dan peran. Variabel peran harus memiliki isi data,
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game".
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir.
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//tips belajar penggunaan `` (backtick) pada javascript agar
//mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)


let name = "";
let role = "";

//code disini gunakan console.log untuk outputnya

// input name and name checker process
do {
    // input name, show prompt dialogue
    name = prompt("Hello player, siapa namamu?", "");
    // name checker, if empty show up alert message
    if (!name) {
        alert("Nama wajib diisi");
    } else {
        // input role and role checker process
        do {
            // input role, show prompt dialogue
            role = prompt(`Hello ${name}, pilih peranmu - opsi [Ksatria, Tabib dan Penyihir]`, "");

            // role checker, if empty show up alert message
            // if role are filled, greeting will be appeared via console
            if (!role) {
                alert("Pilih Peranmu untuk memulai game");
            } else if (role === "Ksatria") {
                // if the player choose role Ksatria
                console.log(`Halo Ksatria ${name} , kamu dapat menyerang dengan senjatamu!`);
            } else if (role === "Tabib") {
                // if the player choose role Tabib
                console.log(`Halo Tabib ${name} , kamu akan membantu temanmu yang terluka!`);
            } else if (role === "Penyihir") {
                // if the player choose role Penyihir
                console.log(`Halo Penyihir ${name} , ciptakan keajaiban yang membantu kemenanganmu!`);
            } else {
                // if the player choose unavailable role
                console.log(`Hello ${name} kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`);
            }
            // while role are empty, loop the input process and show again dialogue prompt
        } while (!role);
    }
// while name are empty, loop the input process and show again dialogue prompt
} while (!name);