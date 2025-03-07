for(let i = 1; i <= 100; i = i+2){
    let kelipatan3 = i % 3 == 0 ? "Kelipatan 3" : "";
    console.log(`${i} ${kelipatan3}`);
}
console.log("===============================\n")
for(let i = 1; i <= 100; i = i+5){
    let kelipatan6 = i % 6 == 0 ? "Kelipatan 6" : "";
    console.log(`${i} ${kelipatan6}`);
}
console.log("===============================\n")
for(let i = 1; i <= 100; i = i+9){
    let kelipatan10 = i % 10 == 0 ? "Kelipatan 10" : "";
    console.log(`${i} ${kelipatan10}`);
}