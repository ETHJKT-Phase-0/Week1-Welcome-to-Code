// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

console.log("LOOPING PERTAMA (HITUNG MAJU)");
let p = 1;
while(p <= 10){
    console.log(p);
    p++;
}

console.log("\n");

console.log("LOOPING KEDUA (HITUNG MUNDUR)");
p = p - 1;
while(p >= 1){
    console.log(p);
    p--;
}