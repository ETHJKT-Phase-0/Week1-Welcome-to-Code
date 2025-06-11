let input = 5

for (let i = 1; i <= input; i++) {
    let output = '';
    for (let j = 1; j <= i; j++) {
        output += '*';
    }
    console.log(output);
}