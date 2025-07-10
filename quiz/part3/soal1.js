// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

let i = 1;
console.log('\nLOOPING PERTAMA');
while (i <= 10) {
  console.log('Looping ' + ' Maju ke-' + i);
  i++;
}


let j = 10;
console.log('\nLOOPING KEDUA');
while (j >= 1) {
  console.log('Looping ' + ' Mundur ke-' + j);
  j--;
}