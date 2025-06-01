function konversiMenit(menit) {
  let mnt = Math.trunc(menit / 60);
  let detik = menit % 60;
  if (detik < 10) {
    return `${mnt}:0${detik}`;
  } else {
    return `${mnt}:${detik}`;
  }
}

console.log(konversiMenit(63));
console.log(konversiMenit(124));
console.log(konversiMenit(53));
console.log(konversiMenit(88));
console.log(konversiMenit(120));
