// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

let maju = 10;
let mundur = 10;

if (maju === undefined || maju === null) {
    throw new Error("Variabel 'maju' harus diisi");
}
else if (mundur === undefined || mundur === null) {
    throw new Error("Variabel 'mundur' harus diisi");
}
else{
    console.log('LOOPING PERTAMA');
    let startMaju = 1;
    while (maju){
        console.log(startMaju);
        startMaju ++;
        if (startMaju > maju){
            break;
        }
    }

    console.log('LOOPING KEDUA');
    let startMundur = mundur;
    while (mundur){
        console.log(mundur);
        mundur -= 1;
        if (mundur < 1){
            break;
        }
    }
}
