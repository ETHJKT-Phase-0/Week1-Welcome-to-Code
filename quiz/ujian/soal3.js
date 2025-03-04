function konversiMenit(menit) {   
    let sisa = menit % 60;
    if (menit % 60 < 10) {
        return Math.floor(menit/60) +':0'+menit % 60;
    } else {
        return Math.floor(menit/60) +':'+ menit % 60;
    }
}

console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00