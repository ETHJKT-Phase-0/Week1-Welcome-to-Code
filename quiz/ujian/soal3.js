// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu 
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. 
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

function konversiMenit(menit) {                 // fungsi untuk menyimpan parameter 'menit' yang akan dipanggil pada console.log diakhir
    // you can only write your code here!
    let jam = Math.floor(menit / 60);           // untuk menghitung pembagian yang nantinya akan merubah menit menjadi jam
    let sisaMenit = menit % 60;                 // modulus untuk menghitung sisa menit 

    if (sisaMenit < 10) {                       // jika sisa menit lebih kecil dari 10
        sisaMenit = '0' + sisaMenit;            // maka akan ditambahkan '0' pada sisa menit
    }
    return jam + ":" + sisaMenit;               // memberikan result jam ditambahkan dengan sisa menit
}
  
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00