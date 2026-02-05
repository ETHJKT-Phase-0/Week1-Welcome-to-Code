// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

let counter=1
while (counter<101){
    if (counter % 2 === 0){
        console.log(`${counter} = Genap`);
    }else{
        console.log(`${counter} = Ganjil`);
    }
    counter++;
}