// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3= 'wow JavaScript is so cool';
let aa = word3.substring(0, 3)
    ba = word3.substring(3, 14),
    ca = word3.substring(14, 17),
    da = word3.substring(17, 20),
    ea = word3.substring(20, 25);

console.log('First Word: ' +aa+ba+ca+da+ea);