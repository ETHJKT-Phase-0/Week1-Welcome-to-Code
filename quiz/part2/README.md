# Quiz Pemrograman Sebelum Masuk Looping | Part 2
## Soal 1
```js
//1. Let's Form a Sentence

// Problem
// Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +.
//  Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain
//  untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan
//   tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!

let word = 'JavaScript';
let second = 'is';
let third = 'awesome';
let fourth = 'and';
let fifth = 'I';
let sixth = 'love';
let seventh = 'it!';

//code here
console.log(word + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh);
```
## Soal 2. Index Accessing - 1 by 1
```js
// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

let word = 'wow JavaScript is so cool';

//lanjutkan dengan struktur log diatas

let exampleFirstWord = 
word[0] + word[1] + word[0]+
word[3]+ 
word[4]+ word[5]+ word[6]+ word[5]+ 
word[8]+ word[9]+ word[10]+ word[11]+ word[12]+ word[13]+ 
word[3] + 
word[11]+ word[16] +
word[3] + 
word[16]+ word[1] +
word[3] + 
word[21]+ word[1]+ word[1]+ word[24];

console.log('First Word: ' + exampleFirstWord);


```
## Soal 3. Breaking Sentence (Again) using Substring
```js
// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3 = 'wow JavaScript is so cool';
let exampleFirstWord3 = word3.substring(0, 3)+ ' '+ 
word3.substring(4, 14)+' '+
word3.substring(15, 17)+' '+
word3.substring(18, 20)+' '+
word3.substring(21, 25);               

console.log('First Word: ' + exampleFirstWord3);
```

## Soal 4. Breaking Sentence (yet Again) and Count Each Length
```js
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let kata1 = word4.substring(0, 3);

let panjang_kata = kata1.length;


console.log('Kata pertama : '+ kata1 + ', dengan panjang: ' + panjang_kata);

console.log('Kata kedua: ' + word4.substring(4, 14) + ', dengan panjang: ' + word4.substring(4, 14).length);
console.log('Kata ketiga : '+word4.substring(15, 17) + ', dengan panjang: ' + word4.substring(15, 17).length); 
console.log('Kata keempat  ' + word4.substring(18, 20) + ', dengan panjang: ' + word4.substring(18, 20).length);    
console.log('Kata kelima: ' + word4.substring(21, 25) + ', dengan panjang: ' + word4.substring(21, 25).length);
```

tulis code sesuai dengan keterangan soalnya dan pola example yang ada

Selamat Mengerjakan 👨🏻‍🌾
