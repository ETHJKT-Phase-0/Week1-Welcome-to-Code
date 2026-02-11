/*
  Soal 1

  Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
  Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
  menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
  Tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua.
*/

{
  let angka = 1;
  console.log('SOAL 1 WHILE');
  console.log('LOOPING PERTAMA');
  while (angka <= 10) {
    console.log(`${angka}`);
    angka++;
  }

  angka = 10;

  console.log('LOOPING KEDUA');
  while (angka >= 1) {
    console.log(`${angka}`);
    angka--;
  }
}

/*
  Soal 2. Melakukan Looping Menggunakan For

  Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
  Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
  menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
  Tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua.
*/

{
  console.log('SOAL 2 FOR');
  console.log('LOOPING PERTAMA');
  for (let i = 1; i <= 10; i++) {
    console.log(`${i}`);
  }

  console.log('LOOPING KEDUA');
  for (let i = 10; i >= 1; i--) {
    console.log(`${i}`);
  }
}

/*
  Soal 3. Angka Ganjil dan Genap

  Hint: kamu akan menggunakan kondisional juga di kasus ini.

  Problem:
  Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1.
  Di dalam perulangan, periksa setiap angka counter:

  - Apabila angka counter adalah angka genap, tuliskan "GENAP"
  - Apabila angka counter adalah angka ganjil, tuliskan "GANJIL"
*/
{
  console.log('SOAL 3 GANJIL GENAP');
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(`GENAP`);
    } else {
      console.log(`GANJIL`);
    }
  }
}

/* 
  Soal 4. Counter Kelipatan

  Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
  Pada 3 perulangan baru ini periksa setiap angka counter:

  Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
  Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
  "3 kelipatan 3" dan seterusnya.
*/

{
  console.log('SOAL 4 COUNTER KELIPATAN');

  for (let i = 1; i <= 100; i += 2) {
    if (i % 3 === 0) {
      console.log(`kelipatan 3`);
    }
  }

  /* Pertambahan counter 5, cek kelipatan 6 */
  for (let i = 1; i <= 100; i += 5) {
    if (i % 6 === 0) {
      console.log(`kelipatan 6`);
    }
  }

  /* Pertambahan counter 9, cek kelipatan 10 */
  for (let i = 1; i <= 100; i += 9) {
    if (i % 10 === 0) {
      console.log(`kelipatan 10`);
    }
  }
}

/*
  Soal 5. Bintang Asteriks

  Problem buatlah bintang seperti berikut:
  let input = 5

  hasilnya:
  *
  **
  ***
  ****
  *****
*/
{
  console.log('SOAL 5 BINTANG');
  let input = 5;

  for (let i = 1; i <= input; i++) {
    let bintang = '';
    for (let j = 1; j <= i; j++) {
      bintang += '*';
    }
    console.log(bintang);
  }
}
