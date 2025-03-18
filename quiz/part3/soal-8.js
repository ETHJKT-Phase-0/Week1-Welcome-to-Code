// buatlah segitiga seperti ini
//     *
//    * *
//   *   *
//  *     *
// *********

// algorithm
// inisiasi baris dari i = 0 sampai i = n - 1
// perulangan pertama untuk membuat baris dari 1 sampai n-1
// buat perulangan kedua di dalam untuk membuat spasi awal sebanyak n - 1
// print * pertama di setiap baris
// lakukan pemeriksaan untuk membuat spasi di dalam segitia
// jika baris > 0 dan baris < input - 1 maka
// lakukan perulangan ketiga untuk membuat spasi sebanyak 2 * i - 1
// jika baris === input - 1 maka cetak * sebanyak input * 2 - 1
// kemudian cetak seluruh bintang

// code

// initialize input for number of row => 5 row
let input = 5;

// first looping
// create row from a = 0 to a = input - 1
for (let a = 0; a < input; a++) {

    // initialize empty string for create triangle
    let triangle = "";

    // second looping as first inner looping
    // create as many space as input - 1
    for (let b = 0; b < input - a - 1; b++) {
        triangle += " ";
    }

    // create first *
    triangle += "*";

    // check if current row are not first row and last row
    if (a > 0 &&  a < (input - 1)) {
        for (let c = 1; c <= (2 * a - 1); c++) {
            triangle += " ";
        }
        triangle += "*";
        // if current row are first row and last row
    } else if (a === input - 1) {
        // looping for create *, sebanyak 2 * a
        for (let d = 0; d < 2 * a; d++) {
            triangle += "*";
        }
    }

    // tampilkan hasil akhir
    console.log(triangle);
}