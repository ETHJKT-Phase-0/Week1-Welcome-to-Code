function xo(str) {
  let countX = 0;
  let countO = 0;
  
  // Loop setiap karakter string
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === 'x') {
      countX++;
    } else if (str[i].toLowerCase() === 'o') {
      countO++;
    }
  }
  
  // Cek apakah jumlah x sama dengan jumlah o
  return countX === countO;
}

console.log(xo('xoxoxo'));    // true
console.log(xo('oxooxo'));    // false
console.log(xo('oxo'));       // false
console.log(xo('xxxooo'));    // true
console.log(xo('xoxooxxo'));  // true
