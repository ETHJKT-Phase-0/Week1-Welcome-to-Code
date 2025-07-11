// ```
// ## Soal 3. Angka Ganjil dan Genap

// ```js
// // Hint: kamu akan menggunakan kondisional juga di kasus ini.

// // Problem
// // Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// // Di dalam perulangan, periksa setiap angka counter:

// // Apabila angka counter adalah angka genap, tuliskan GENAP
// // Apabila angka counter adalah angka ganjil, tuliskan GANJIL

// let count = 0 

// while (count <= 100){
//     if (count % 2 === 0) {
//         console.log(count + " " + "Genap")
//     }else {
//         console.log(count + " " +"Ganjil")
//     }count ++
// }


for( let i=0 ; i <=100; i ++){
    if (i % 2 === 0) {
        console.log(i + "" + ' Genap')
    }else {
        console.log(i + "" + ' Ganjil')
    }
}

//Doneee