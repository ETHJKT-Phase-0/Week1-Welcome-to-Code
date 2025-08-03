function konversiMenit(menit) {
    let detik = menit % 60;
    menit = Math.floor(menit / 60);

    if (detik < 10) {
        return menit + ':' + 0 + detik;
    } else {
        return menit + ":" + detik;
    }
}
console.log(konversiMenit(63));
console.log(konversiMenit(124));
console.log(konversiMenit(53));
console.log(konversiMenit(88));
console.log(konversiMenit(120));



