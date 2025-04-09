
// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu 
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. 
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".


function konversiMenit(menit) {
    let jam = Math.floor(menit / 60);
    let sisaMenit = menit % 60;
    let formatMenit = sisaMenit < 10 ? '0' + sisaMenit : sisaMenit; 
    return `${jam}:${formatMenit}`;
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // Output: 1:03
  console.log(konversiMenit(45)); // Output: 0:45
  console.log(konversiMenit(125)); // Output: 2:05
  console.log(konversiMenit(0));   // Output: 0:00
  