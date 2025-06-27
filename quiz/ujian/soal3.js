function konversiMenit(menit){
    let jam = Math.floor(menit / 60);
    let sisaJam = menit % 60;

    if (sisaJam < 10){
        sisaJam = '0' + sisaJam;
    }
    return jam + ':' + sisaJam;
}

console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00