// Problem
// Diberikan sebuah function bandingkanAngka(angka1, angka2) yang menerima dua parameter angka. 
// Function akan me-return nilai true jika angka2 lebih besar dari angka1, dan false jika sebaliknya. 
// Jika kedua angka bernilai sama, function akan me-return -1.

function bandingkanAngka(angka1, angka2) {  // fungsi untuk menyimpan parameter angka1 dan angka2 yang akan dipanggil pada console.log diakhir
    //code disini
    if (angka1 < angka2) {                  // jika angka2 lebih besar dari angka1
        return true;                        // maka return 'true'
    } else if (angka1 > angka2) {           // jika angka2 lebih kecil dari angka1
        return false;                       // return 'false'
    } else if (angka1 === angka2) {         // jika angka1 dan angka2 sama
        return '-1';                        // maka return '-1'
    }
  }
    
    // TEST CASES
    console.log(bandingkanAngka(5, 8)); // true
    console.log(bandingkanAngka(5, 3)); // false
    console.log(bandingkanAngka(4, 4)); // -1
    console.log(bandingkanAngka(3, 3)); // -1
    console.log(bandingkanAngka(17, 2)); // false