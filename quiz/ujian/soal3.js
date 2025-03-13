/**
 *@ Author: Ulkaboos a.k.a Julius  
 */

function konversiMenit(menit){
  let hours = Math.floor(menit / 60);
  let minutes = menit % 60;
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  return `${hours}:${minutes}`;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
