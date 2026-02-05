// Soal 4
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.
console.log(`Perulangan Pertama`);
for(let i=1; i<=100; i = i+2){
    if(i % 3 == 0){
        console.log(`${i} Kelipatan 3`);
    }else{
        console.log(i);
    }
    
}
console.log();
console.log();
console.log(`Perulangan Kedua`);
for(let j = 1; j<=100; j = j+5){
    if(j % 6 == 0){
        console.log(`${j} Kelipatan 6`);
    }else{
        console.log(j);
    }
}

console.log();
console.log();
console.log(`Perulangan Ketiga`);
for(let k=1; k<=100; k = k+9){
    if(k % 10 == 0){
        console.log(`${k} kelipatan 10`);
    }else{
        console.log(k);
    }
}