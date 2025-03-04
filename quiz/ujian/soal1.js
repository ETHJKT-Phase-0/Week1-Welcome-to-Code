// Problem
// Diberikan sebuah function bandingkanAngka(angka1, angka2) yang menerima dua parameter angka. 
// Function akan me-return nilai true jika angka2 lebih besar dari angka1, dan false jika sebaliknya. 
// Jika kedua angka bernilai sama, function akan me-return -1.

// Algoritma
/*
    note:
    true jika angka2 lebih besar dari angka1
    false jika angka2 lebih kecil dari angka1
    -1 jika angka2 dan angka1 sama

    1. bandingkan angka2 jika lebih dari angka1 maka return true
    2. bandingkan angka2 jika kurang dari angka1 maka return false
    3. untuk angka sama kita bisa pake else, secara otomatis akan return -1
*/

function bandingkanAngka(angka1, angka2) {
    if(angka2 > angka1) {
        return true;
    } else if(angka2 < angka1) {
        return false;
    } else {
        return -1;
    }
  }
    
// TEST CASES
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false
  