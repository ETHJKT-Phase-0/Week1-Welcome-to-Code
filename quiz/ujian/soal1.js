function bandingkanAngka(x, y) {
  if (x < y) {
    return true;
  } else if (x > y) {
    return false;
  } else {
    return -1;
  }
}

console.log(bandingkanAngka(5, 8));
console.log(bandingkanAngka(5, 3));
console.log(bandingkanAngka(4, 4));
console.log(bandingkanAngka(3, 3));
console.log(bandingkanAngka(17, 2));
