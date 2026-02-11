//soal 1

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

console.log("=========PROXYTIA GAME========");
//inisialisasi
let nama ="", peran="", pilihanmode="inputnama";

//untuk warna biar seperti para hakle 😅😄
const colors = {
    reset: "\x1b[0m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    cyan: "\x1b[36m",
    magenta: "\x1b[35m"
};

//fungsi untuk input cli
function tanyanama(){
    //stdout mengambil input keyboard
    //color reset agar inputan default color kalau tidak ikut direset jadi color sama cyan
    process.stdout.write(colors.cyan +"Masukan nama pemain: "+ colors.reset);
}

//fungsi memilih peran
function pilihanperan(){
    console.log(colors.magenta+"------ Pilihan Peran Pemain ------" +colors.reset);
    console.log(colors.magenta+ "1. Ksatria");
    console.log("2. Tabib");
    console.log("3. Penyihir");
    process.stdout.write(colors.green+ "Pilih Peranmu untuk memulai game (1/2/3): "+ colors.reset);
}


//mendengar inputan dari keyboard dan aksi yang dilakukan
process.stdin.on("data", (data)=>{
    
    //defaultmode input
    if(pilihanmode ==="inputnama"){
        nama = data.toString().trim();
        if (nama === ""){
            //warning jika nama kosong
            console.log( colors.yellow + "⚠️  Nama wajib diisi gaess!!!" + colors.reset);
            tanyanama();
        }else{
            //jika nama tidak kosong
            //create and enable mode pilihperan alihkan ke pertanyaan peran
            pilihanmode="pilihperan";
            pilihanperan();
        }
    }else if(pilihanmode === "pilihperan"){
        //confersi inputan data jadi Integer agar bisa switch case
        const pilihan = parseInt(data.toString().trim());
        if(isNaN(pilihan)){
            console.log(colors.yellow + "⚠️  Pilih Peranmu untuk memulai game!!"+ colors.reset);
            pilihanperan();
        }else{
            //pilihan peran dengan angka
            switch(pilihan){
                case 1 : 
                    console.log(colors.magenta +`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`+ colors.reset);
                    process.exit();
                    break;
                case 2 : 
                    console.log(colors.magenta +`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`+ colors.reset);
                    process.exit();
                    break;
                case 3 : 
                    console.log(colors.magenta +`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`+ colors.reset);
                    process.exit();
                    break;
                default:
                    console.log(colors.magenta + `tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`+ colors.reset);
                    process.exit();
                    //jika mau kembali inputan bukan angka
                //     process.stdout.write("\n⚠️  Input salah! Harap masukkan angka (1/2/3) saja.\n");
                //     process.stdout.write("Pilih kembali: ");
                    // Tanpa process.exit(), program akan menunggu input data lagi
                    // break;
                    
            }
            
        }
        
    }
});

//PANGGIL FUNGSI UNTUK DIJALANKAN SAAT PERTAMA KALI
// oke di sini saya tidak menggunakan fungsi main alias langsung fungsi yg dijalankan pertama kali
 tanyanama();