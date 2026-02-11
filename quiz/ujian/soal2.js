function balikKata(kata) {
  const lenKata = kata.length;
  let newKata = '';
  for(let i = lenKata-1; i>=  0; i--){
    newKata += kata[i]
  }
  return newKata;
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS