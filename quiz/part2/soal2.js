// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

let word = 'wow JavaScript is so cool';
//lanjutkan dengan struktur log diatas

let kata = "";
const kumpulan_kata = [];
let p = 0;
for(let i = 0; i < word.length; i++){
    if(word[i] != " "){
        kata += word[i];
    }else if(word[i] == " "){
        let kata_temp = kata;
        kumpulan_kata[p] = kata_temp;
        p++;
        kata = "";
    }
}

kumpulan_kata[p] = kata;

for(let i = 0; i < kumpulan_kata.length; i++){
    let temp = "";
    switch(i){
        case 0:
            temp = "First";
            break;
        case 1: 
            temp = "Second";
            break;
        case 2: 
            temp = "Third";
            break;
        case 3:
            temp = "Fourth";
            break;
        case 4: 
            temp = "Fiveth";
            break;
        default: 
            break;
    }
    console.log(`${temp} word: ${kumpulan_kata[i]}`)
}