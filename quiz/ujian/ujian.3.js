function konversiMenit(menit) {
    let jam = (menit / 60);
    let detik = (menit % 60) //untuk mengecek apakah satuan detik lebih dari atau kurang dari satu digit
        if(detik < 10){
            formatdetik = "0" + detik 
        } else{
            formatdetik = (menit % 60)
        }
    return Math.floor(jam) + ":" + formatdetik
}

console.log(konversiMenit(63)); 
console.log(konversiMenit(124)); 
console.log(konversiMenit(53)); 
console.log(konversiMenit(88)); 
console.log(konversiMenit(120)); 
console.log(konversiMenit(586));