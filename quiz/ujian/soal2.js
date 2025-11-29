function balikKata(kata){
    let balik = '';
    for (let i = kata.length - 1; i >= 0; i--){
        balik += kata[i];
    }
    return balik;
}

console.log(balikKata('Hello World and coders')); 
console.log(balikKata('John Doe'));
console.log(balikKata('I am a bookworm'));
console.log(balikKata('Coding is my hobby'));
console.log(balikKata('Super'));