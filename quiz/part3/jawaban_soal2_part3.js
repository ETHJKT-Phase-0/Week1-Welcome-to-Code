// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
let numMins = 0, numPlus = 0;
for(let i= 0; i < 10;i++){    
    console.log("Looping pertama (maju): " + (numPlus+1));
    numPlus++;


}

console.log("");

for(let j= 0; j > -10;j--){    
    console.log("Looping kedua (mundur): " + (numMins-1));
    numMins--;

}