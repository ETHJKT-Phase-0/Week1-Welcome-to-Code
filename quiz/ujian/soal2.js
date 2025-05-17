function balikKata(kata) {
  // Membalik string dengan cara:
  // 1. Mengubah string jadi array karakter menggunakan split('')
  // 2. Membalik array dengan reverse()
  // 3. Menggabungkan kembali ke string dengan join('')
  return kata.split('').reverse().join('');
}

console.log(balikKata('Hello World and Coders')); 
console.log(balikKata('John Doe'));               
console.log(balikKata('I am a bookworm'));        
console.log(balikKata('Coding is my hobby'));     
console.log(balikKata('Super'));                   
