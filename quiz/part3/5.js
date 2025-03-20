let input = 5;
let res = ""
for (let i = 0; i < input; i++) {
  for (let j = 0; j <= i; j++) {
    res += "*";
  }
  res += "\n";
}

console.log(res);