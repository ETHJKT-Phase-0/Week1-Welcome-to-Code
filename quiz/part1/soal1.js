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
/*
1.selamat datang
2.masukan nama(jika kosong ada peringatan)
3.pilih peran kesatria - tabib - Penyihir
4.respon setelah memilih peran


let nama = "", peran = "";*/
var n = prompt('Selamat datang di Proxytia \nSilahkan masukan nama anda');
if(n ==''){
  alert('nama wajib diisi');
}else{
var p = prompt('silakan pilih peranmu\nKesatria-tabib-penyihir');
if(p ==''){
  alert('pilih peran untuk melanjutkan permainan');
}
}
if( p == 'ksatria' ){
  console.log('halo Ksatria '+ n + ' , kamu dapat menyerang dengan senjatamu!');
}else if(p == 'tabib'){
  console.log('halo Tabib ' + n +', kamu akan membantu temanmu yang terluka');
}else if(p == 'penyihir' ){
  console.log('halo Penyihir '+ n +' , ciptakan keajaiban yang membantu kemenanganmu!');
}else{
  console.log('tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada');
}