function konversiMenit(menit) {
    const jam = Math.floor(menit / 60);
    const menitSisa = menit % 60;
    
    if (menitSisa < 10) {
        return `${jam}:0${menitSisa}`;
    } else {
        return `${jam}:${menitSisa}`;
    }
}

//TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00