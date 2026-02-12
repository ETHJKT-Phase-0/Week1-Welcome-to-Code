// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
// tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

//Loop Hitungan Maju (0, 1, 2, 3, 4)
let a = 0
let b = "LOOPING PERTAMA: "
while (a < 5) {
    b += a;
    b += ', '
    a++;
}
console.log(b)

//Loop Hitungan Mundur (5, 4, 3, 2, 1)
let c = 5
let d = "LOOPING KEDUA: "
while (c > 0) {
    d += c;
    d += ', '
    c--;
}
console.log(d)