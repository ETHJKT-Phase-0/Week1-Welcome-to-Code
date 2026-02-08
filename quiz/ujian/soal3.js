function konversiMenit(menit) {
    let jam = parseInt(menit / 60)
    let sisaMenit = menit % 60
    if (parseInt(sisaMenit / 10) === 0) {
        return `${jam}:0${sisaMenit}`
    } else {
        return `${jam}:${sisaMenit}`
    }
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00