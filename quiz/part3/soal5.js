let input = 5
let x = "";
for(let i = 1; i<=input; i++){
    for(let j = 1 ;j<=i ; j++){
        x += "*";
    }
    x += "\n"; 
}
console.log(x);