let input = 5;
let pattern = "";
for (let i = 1; i <= input; i++) {           // Loop baris
  for (let j = 1; j <= i; j++) {         // Loop kolom (bintang per baris)
    
    pattern += "*";
  }
  pattern += "\n";
}
console.log(pattern);