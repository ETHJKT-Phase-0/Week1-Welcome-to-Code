let input = 5;
let result = '';

for(let i = 0; i <= input; i++) {
    for(j = 1; j <= i; j++) {
        result += '*';
    }
    result += '\n';
}

console.log(result);