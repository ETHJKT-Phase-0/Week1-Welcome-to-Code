function konversiMenit(menit) {
  return `${parseInt(menit / 60)}:${
    menit % 60 > 9 ? menit % 60 : `0${menit % 60}`
  }`;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
