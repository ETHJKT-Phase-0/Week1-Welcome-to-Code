function konversiMenit(menit) {
    let detik, waktu, result;

    if (menit >= 60) {
        detik = menit % 60;
        waktu = Math.floor(menit / 60);
        result = `${waktu}:${detik < 10 ? '0' : ''}${detik}`;
    } else {
        detik = menit;
        result = `0:${detik < 10 ? '0' : ''}${detik}`;
    }

    return result;
}

console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00