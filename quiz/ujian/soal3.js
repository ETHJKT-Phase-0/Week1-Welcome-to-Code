function konversiMenit(menit) {
    let newMenit = menit / 60;
    let newSecond = menit % 60;
    let nolDepanAngka = newSecond < 10 ? `0${newSecond}` : `${newSecond}` 

    return `${Math.trunc(newMenit)}:${nolDepanAngka}`
}
  
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
