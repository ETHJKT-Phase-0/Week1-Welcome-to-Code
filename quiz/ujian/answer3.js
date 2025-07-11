// ## Soal 3
// ```js

// // Problem
// // Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan
//  ukuran waktu 
// // dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. 
// // Contoh, jika menit adalah 63, maka function akan me-return "1:03".

// function konversiMenit(menit) {
//     let jam = Math.floor(menit / 60);
//     let sisamenit = menit % 60; 

//     if(sisamenit < 10){
//         sisamenit = "0" + sisamenit;
//     }   return jam + ":" + sisamenit + " Menit";
// }
  
// // TEST CASES
// console.log(konversiMenit(63)); // 1:03
// console.log(konversiMenit(124)); // 2:04
// console.log(konversiMenit(53)); // 0:53
// console.log(konversiMenit(88)); // 1:28
// console.log(konversiMenit(120)); // 2:00
// // ```

function konversimenit(menit){
    let hours = Math.floor(menit/60);
    let sisamenit = menit % 60

    return `${hours} Jam : ${sisamenit <10 ? "0" + sisamenit : sisamenit} Menit `

} 
console.log(konversimenit(90));
console.log(konversimenit(75));
console.log(konversimenit(256));
console.log(konversimenit(68));

//Done