// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
let number = 0;

console.log("LOOPING PERTAMA")
while(number <= 10){
    console.log(`Nilai maju ${number}`);
    number++;
}

console.log("\nLOOPING KEDUA");
let number2 = 10;
while(number2 >= 0){
    console.log(`Nilai mundur ${number2}`);
    number2--;
}