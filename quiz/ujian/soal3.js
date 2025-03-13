//Soal 3
// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu 
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. 
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

function konversiMenit(menit) {
    let jam = Math.floor(menit / 60);
    let sisaMenit = menit % 60;
    
    sisaMenit = sisaMenit < 10 ? "0" + sisaMenit : sisaMenit;
    return `${jam}:${sisaMenit}`
}
console.log(konversiMenit(63));
console.log(konversiMenit(120));
console.log(konversiMenit(1215));
