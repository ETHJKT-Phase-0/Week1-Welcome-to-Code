/* ## Soal 1

```js
Problem
Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua */

let loop1 = 1,
    loop2 = 10;

//looping maju
while(loop1 <= 10){
    console.log(`looping maju ${loop1}`);
    
    loop1++;
}
//looping mundur
while(loop2 >= 1){
    console.log(`looping mundur ${loop2}`);
    loop2--;
}