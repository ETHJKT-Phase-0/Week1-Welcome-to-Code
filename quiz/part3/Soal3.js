// Soal 3
// Hint: kamu akan menggunakan kondisional juga di kasus ini.
// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:
// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL
let num = 1;

while(num <= 100){
    if(num % 2 == 0){
        console.log(`${num} = Genap`);
    } else{
        console.log(`${num} = Ganjil`);
    }
    num++;
}
