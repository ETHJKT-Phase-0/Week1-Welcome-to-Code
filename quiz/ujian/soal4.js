//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
    // Pecah setiap digit dalam str menjadi array dan filter agar hanya menyisakan data dengan value "x" 
    // lalu ambil jumlah data dalam array setelah di filter
    let jumlah_x = str.split("").filter((value) => value === "x").length;

    // Pecah setiap digit dalam str menjadi array dan filter agar hanya menyisakan data dengan value "y" 
    // lalu ambil jumlah data dalam array setelah di filter
    let jumlah_o = str.split("").filter((value) => value === "o").length;

    if (jumlah_x === jumlah_o) return true;
    if (jumlah_x !== jumlah_o) return false;
}
  
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true