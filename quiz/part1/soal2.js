// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 2; //  nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

let NamaBulan = ""
//code switch case kamu disini
switch(bulan) {
  case 1:
      NamaBulan = "januari"
    break
  case 2:
      NamaBulan = "februari"
    break
  case 3:
      NamaBulan = "maret"
    break
  case 4:
      NamaBulan = "april"
    break
  case 5:
      NamaBulan = "mei"
    break
  case 6:
      NamaBulan = "juni"
    break
  case 7:
      NamaBulan = "juli"
    break
  case 8:
      NamaBulan = "agustus"
    break
  case 9:
      NamaBulan = "september"
    break
  case 10:
      NamaBulan = "oktober"
    break
  case 11:
      NamaBulan = "november"
    break
  case 12:
      NamaBulan = "desember"
    break
  default:
    NamaBulan = "bulan tidak valid" 
}

console.log(`sekarang tanggal ${tanggal} ${NamaBulan} ${tahun}`)
