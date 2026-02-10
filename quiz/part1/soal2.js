

// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

//let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
//let bulan = "februari"; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
//let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//code switch case kamu disini

let hari = '1',
  bulan = '1',
  tahun = '1987';
switch(bulan){
  case '1' :
    console.log(hari + " januari " + tahun);
    break;
  case '2' : 
    console.log(hari + " februari " + tahun);
    break;
  case '3' :
    console.log(hari + " maret " + tahun);
    break;
  case '4' :
    console.log(hari + " april " + tahun);
    break;
  case '5' :
    console.log(hari + " mei " + tahun);
    break;
  case '6' :
    console.log(hari + " juni " + tahun);
    break;
  case '7' :
    console.log(hari + " juli " + tahun);
    break;
  case '8' :
    console.log(hari + " agustus " + tahun);
    break;
  case '9' :
    console.log(hari + " september " + tahun);
    break;
  case '10' :
    console.log(hari + " oktober " + tahun);
    break;
  case '11' :
    console.log(hari + " november " + tahun);
    break;
  case '12' :
   console.log(hari + " desember " + tahun);
    break;
    default :
    console.log('salah masukin');
    break;
}