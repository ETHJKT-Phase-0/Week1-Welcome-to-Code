// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

let word = 'wow JavaScript is so cool';

let exampleFirstWord = word[0] + word[1] + word[2];
console.log('First Word: ' + exampleFirstWord);
 
let secondword = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13]
console.log ('second Word: ' + secondword);

let thirdword = word[15] + word[16] 
console.log (`third word: ` + thirdword);

let fourthword = word[18] + word[19] 
console.log (`fourth word: ` + fourthword)

let fifthword = word[20] + word[21] + word[22] + word[23]
console.log (`fifth word:` + fifthword)
// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3 = 'wow JavaScript is so cool';

let exampleFirstWord3 = word3.substring(0, 3);
console.log('First Word: ' + exampleFirstWord3);

let secondword3 = word3.substring(4, 14);
console.log(`second word:` + secondword3)

let thirdword3 = word3.substring(15, 17);
console.log (`third word: ` + thirdword3)

let fourthword3 = word3.substring(18, 20);  
console.log (`fourth word: ` + fourthword3)

let fifthword3 = word3.substring(21, 25);
console.log (`fifthword: ` + fifthword3) 

//Problem
//Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

let word4 = 'wow JavaScript is so cool';

let exampleFirstWord4 = word4.substring(0, 3);
let firstWordLength = exampleFirstWord4.length;
console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);

let secondword4 = word4.substring(4, 14);
let secondwordlength = secondword4.length;
console.log(`second word:` + secondword4 + `, with length: ` + secondwordlength)

let thirdword4 = word4.substring(15, 17);
let thirdwordlength = thirdword4.length;
console.log (`third word: ` + thirdword4 + `, with length: ` + thirdwordlength)

let fourthword4 = word4.substring(18, 20);
let fourthwordlength = fourthword4.length;
console.log (`fourth word: ` + fourthword4 + `, with length: ` + fourthwordlength)

let fifthword4 = word4.substring(21, 25);
let fifthwordlength = fifthword4.length;
console.log (`fifthword: ` + fifthword4 + `, with length: ` + fifthwordlength)