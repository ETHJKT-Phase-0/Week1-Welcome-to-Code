let input = 6;
let pattern = "";
for(i = 1; i <= input; i++){
    for(j = 1; j <= i; j++){
        pattern += "*";
    }
    pattern += "\n";
}

console.log(pattern);