function balikKata(kata) {
    let balikKata=""
    for(i = kata.length; i >= 0; --i){
        balikKata += kata[i]
    }
       return balikKata    
}

console.log(balikKata('Hello World and Coders')); 
console.log(balikKata('I am a bookworm')); 
console.log(balikKata('Coding is my hobby')); 
console.log(balikKata('Super')); 