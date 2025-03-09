function konversiMenit(menit) {
    var jam = Math.floor(menit / 60)
    var menit = menit % 60
    return `${jam}:${menit < 10 ? '0' + menit : menit}`
}
  
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00