function konversiMenit(menit) {
    let angkaJam = String(Math.trunc(menit / 60));
    let angkaMenit = String(menit % 60).padStart(2, '0');
    let waktu = angkaJam + `:` + angkaMenit;
    return waktu;
}
  
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00