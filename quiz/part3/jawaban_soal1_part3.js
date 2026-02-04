// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

let i = 0, j= 0, numPlus = 0, numMins = 0;
while(i < 10){
    console.log("Looping pertama (maju): " + (numPlus+1) );
    numPlus++;
    i++;
}

console.log("\n");

while(j > -10){
    console.log("Looping kedua (mundur): " + (numMins-1) );
    numMins--;
    j--;
}