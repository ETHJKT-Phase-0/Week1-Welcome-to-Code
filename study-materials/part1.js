function CekGenapGanjil(angka) {
    if (angka % 2 === 0) {
        return "Genap";
    } else {
        return "Ganjil";
    }
}

console.log ("Angka ini adalah", CekGenapGanjil(4));
console.log ("Angka ini adalah", CekGenapGanjil(7));