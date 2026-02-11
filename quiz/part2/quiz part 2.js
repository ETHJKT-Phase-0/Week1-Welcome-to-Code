/* Soal 1

Problem:
Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +.
Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain
untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan
tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!
*/

{
  let word = 'JavaScript';
  let second = 'is';
  let third = 'awesome';
  let fourth = 'and';
  let fifth = 'I';
  let sixth = 'love';
  let seventh = 'it!';

  word = word + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh;

  console.log(word);
}

/* Soal 2

Problem:
Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata di dalamnya.
Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

Hints:
Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata tersebut!
*/

{
  let word = 'wow JavaScript is so cool';

  let firstWord = word[0] + word[1] + word[2];
  let secondWord = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13];
  let thirdWord = word[15] + word[16];
  let fourthWord = word[18] + word[19];
  let fifthWord = word[21] + word[22] + word[23] + word[24];

  console.log('First Word: ' + firstWord);
  console.log('Second Word: ' + secondWord);
  console.log('Third Word: ' + thirdWord);
  console.log('Fourth Word: ' + fourthWord);
  console.log('Fifth Word: ' + fifthWord);
}

/* Soal 3
Problem:
Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!
*/

{
  let word = 'wow JavaScript is so cool';
  let firstWord = word.substring(0, 3);
  let secondWord = word.substring(4, 14);
  let thirdWord = word.substring(15, 17);
  let fourthWord = word.substring(18, 20);
  let fifthWord = word.substring(21, 25);

  console.log('First Word: ' + firstWord);
  console.log('Second Word: ' + secondWord);
  console.log('Third Word: ' + thirdWord);
  console.log('Fourth Word: ' + fourthWord);
  console.log('Fifth Word: ' + fifthWord);
}

/* Soal 4
Problem:
Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!
*/

{
  let word = 'wow JavaScript is so cool';

  let firstWord = word.substring(0, 3);
  let secondWord = word.substring(4, 14);
  let thirdWord = word.substring(15, 17);
  let fourthWord = word.substring(18, 20);
  let fifthWord = word.substring(21, 25);

  let firstWordLength = firstWord.length;
  let secondWordLength = secondWord.length;
  let thirdWordLength = thirdWord.length;
  let fourthWordLength = fourthWord.length;
  let fifthWordLength = fifthWord.length;

  console.log('First Word: ' + firstWord + ', with length: ' + firstWordLength);
  console.log('Second Word: ' + secondWord + ', with length: ' + secondWordLength);
  console.log('Third Word: ' + thirdWord + ', with length: ' + thirdWordLength);
  console.log('Fourth Word: ' + fourthWord + ', with length: ' + fourthWordLength);
  console.log('Fifth Word: ' + fifthWord + ', with length: ' + fifthWordLength);
}
