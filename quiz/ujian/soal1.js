// ## Soal 1
// Problem
// Diberikan sebuah function bandingkanAngka(angka1, angka2) yang menerima dua parameter angka. 
// Function akan me-return nilai true jika angka2 lebih besar dari angka1, dan false jika sebaliknya. 
// Jika kedua angka bernilai sama, function akan me-return -1.

function bandingkanAngka(angka1, angka2) {
  if(angka1 > angka2){
    return false
  } else if(angka1 < angka2){
    return true
  } else {
    return -1
  }
}
  
  // TEST CASES
  console.log(bandingkanAngka(5, 8)); // true
  console.log(bandingkanAngka(5, 3)); // false
  console.log(bandingkanAngka(4, 4)); // -1
  console.log(bandingkanAngka(3, 3)); // -1
  console.log(bandingkanAngka(17, 2)); // false

const buah = ['apel','pisang','jeruk','durian','sawo']

for(const daftar of buah){
  console.log(daftar)
}

const hp = { cpu:'amd', ram:'8gb'
}

for(const list in hp){
  console.log(list, " - ", hp[list] )
}