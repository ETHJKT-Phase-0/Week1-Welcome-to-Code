//Soal 2
// Problem
// Diberikan sebuah function balikKata(kata) yang menerima satu parameter berupa string. 
// Function akan me-return kata yang dibalik. Contoh, jika kata adalah "John Doe", 
// function akan me-return "eoD nhoJ".

function balikKata(kata) {
    return kata.split('').reverse().join('');
}
console.log(balikKata('Rian Sedang Makan'));