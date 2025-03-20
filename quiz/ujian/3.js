function konversiMenit(menit) {
  // you can only write your code here!
  const min = Math.floor(menit / 60);
  const sec = menit % 60;

  return sec < 10 ? `${min}:0${sec}` : `${min}:${sec}`;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
