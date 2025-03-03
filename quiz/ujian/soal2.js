// Problem
// Diberikan sebuah function balikKata(kata) yang menerima satu parameter berupa string. 
// Function akan me-return kata yang dibalik. Contoh, jika kata adalah "John Doe", function akan me-return "eoD nhoJ".

function balikKata(kata) {                          // fungsi untuk menyimpan parameter 'kata' yang akan dipanggil pada console.log diakhir
    // you can only write your code here!
    let hasil = '';                                 // variable string kosong yang nantinya untuk menyimpan result string yang dibalik
    for (let i = kata.length - 1; i >= 0; i--) {    // mengambil karakter terakhir dalam string dan terus berkurang sampai karakter pertama dalam string
        hasil += kata[i];                           // karakter pada posisi 'i' atau karakter terakhir pada string disimpan kedalam variable 'hasil'
    }
    return hasil;                                   // memberikan result dari variable 'hasil'
}
  
// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS