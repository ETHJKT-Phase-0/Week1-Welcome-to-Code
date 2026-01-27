// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

//LOOPING PERTAMA (MAJU)

let pertama = 0;

console.log("Looping Pertama (Maju)");
while (pertama <= 10) {
    console.log(pertama);
    pertama++;
}

//LOOPING KEDUA (MUNDUR)

let kedua = 10;

console.log("\nLooping Kedua (Mundur)");
while (kedua >= 0) {
    console.log(kedua);
    kedua--;
}