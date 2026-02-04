// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

let i = 1, genap = 0, ganjil = 0;
while(i <= 100){
    if(i % 2 == 0) {
        genap++;
        console.log(i + " Genap");
    }
    else{ 
        ganjil++;
        console.log(i + " Ganjil");
    }
    i++;
}
console.log("Angka Genap: " + genap + " " + "Angka Ganjil: "+ ganjil);