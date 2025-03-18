//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string.
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
    // you can only write your code here!
    // akses array

    // inisialisasi string kosong untuk wadah input
    let input = str;
    // inisialisasi string kosong untuk wadah x
    let x = "";
    // inisialisasi string kosong untuk wadah o
    let o = "";

    // akses string menggunakan for loop
    for (let i = 0; i < input.length; i++) {
        // percabangan untuk mengambil huruf o dan x
        if (input[i] === 'o') {
            // simpan huruf o ke dalam variable o
            o += input[i];
        } else if (input[i] === 'x') {
            // simpan huruf x ke dalam variable x
            x += input[i];
        }
    }

    // kembalikan value boolean (perbandingan jumlah huruf)
    return x.length === o.length;


}

// metode yang lebih simple

function xoxo(str) {
    let x = "";
    let o = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'o') {
            o++;
        } else if (str[i] === 'x') {
            x++;
        }
    }

    return x.length === o.length;
}


// TEST CASES xo func
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true


// TEST CASES xoxo func
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true