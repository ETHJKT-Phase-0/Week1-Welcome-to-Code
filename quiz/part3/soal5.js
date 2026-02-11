let input = 5; 
for(let i = input; i >= 1; i--){ 
    let star = '';
    for(let j = i; j <= input; j++){
        star += '*'
    }
    console.log(star);
}