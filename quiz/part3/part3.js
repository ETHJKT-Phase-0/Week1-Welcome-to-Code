//Soal 1

// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
function soalNomor1(){
console.log("soal nomor 1");

let i = 0;
while(i < 10){
  console.log('LOOPING PERTAMA ', i);
  i++
}
console.log();
while(i > 0){
  console.log('LOOPING KEDUA ', i);
  i--
}
}
// Soal 2. Melakukan Looping Menggunakan For

// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
function soalNomor2(){
console.log("soal nomor 2");

let j = 0;

  for(j; j < 10; j++){
    console.log("LOOPING PERTAMA ", j);
  }

console.log();

  for(j; j > 0; j--){
    console.log("LOOPING KEDUA ", j);
  }
}
// Soal 3. Angka Ganjil dan Genap

// Hint: kamu akan menggunakan kondisional juga di kasus ini.
// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:
// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL
function soalNomor3(){
console.log("soal nomor 3")
  for(let n = 0; n < 100; n++){
    if(n % 2 === 0){
      console.log(`${n} adalah GENAP`);
    } else if(n % 2 === 1){
      console.log(`${n} adalah GANJIL`);
    }
  }
}
// Soal 4. counter kelipatan

// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:
// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.
function soalNomor4(){
console.log("soal nomor 4")
for(let n = 0; n < 100; n += 2){
  if(n % 3 === 0){
    console.log(`${n} adalah kelipatan 3`);
  }
}

console.log();

for(let n = 0; n < 100; n +=5 ){
  if(n % 6 === 0){
    console.log(`${n} adalah kelipatan 6`);
  }
}

console.log();

for(let n = 0; n < 100; n +=9){
  if(n % 10 === 0){
    console.log(`${n} adalah kelipatan 10`);
  }
}

}
// Soal 5. Bintang asteriks

// Problem buatlah bintang seperti berikut
//hasilnya
//*
//**
//***
//****
//*****

function soalNomor5(){
  console.log("soal nomor 5\n");
  let input = 5
  let pattern = "";
  for (let i = 1; i <= input; i++) {          
    for (let j = 1; j <= i; j++) {         
      pattern += "*";
    }
    pattern += "\n";
  }
  console.log(pattern);
}

//call fungsi untuk run jawaban
soalNomor5();