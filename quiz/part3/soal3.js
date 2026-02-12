// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

let i = 0
let x = []
for (;i < 100; i++) {
    x.push(i)
}

let a = 0
let c = []
let d = []
for (;a < x.length; a++) {
    if (x[a] % 2 === 0) {
        c.push(x[a])
    } else if (x[a] % 2 === 1) {
        d.push(x[a])
    } 
    if (a % 2 === 0) {
        console.log(`${a} adalah GENAP`)
    } else if (a % 2 === 1) {
        console.log(`${a} adalah GANJIL`)
    }
    
}
console.log(c)
console.log(d)