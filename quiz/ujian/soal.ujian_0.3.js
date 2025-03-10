// ## Soal 3
// ```js

// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu 
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. 
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

function konversiMenit(menit) {
        let jam = Math.floor( menit / 60 );
        let sisaMenit = ( menit % 60 ).toString().padStart(2, "0");

        return `${jam}:${sisaMenit}.`;
}
  
// TEST CASES
console.log(konversiMenit(741));
console.log(konversiMenit(435));
console.log(konversiMenit(1242));
console.log(konversiMenit(234));
console.log(konversiMenit(2312));
// ```
