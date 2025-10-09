// Problem
// Diberikan sebuah function bandingkanAngka(angka1, angka2) yang menerima dua parameter angka. 
// Function akan me-return nilai true jika angka2 lebih besar dari angka1, dan false jika sebaliknya. 
// Jika kedua angka bernilai sama, function akan me-return -1.

function bandingkanAngka(angka1, angka2) {
    //code disini
    if (angka2 > angka1){
        return true;
    } else if (angka2 < angka1){
        return false;
    } else if (angka1 === angka2){
        return -1
    }
}

let coba = bandingkanAngka(4, 3);
console.log(coba);