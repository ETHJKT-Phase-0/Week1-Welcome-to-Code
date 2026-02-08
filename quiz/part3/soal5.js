let input = 5
let result = ""
for (let i = 0; i < input; i++) {
    for (let j = 0; j <= i; j++) {
        result = result + "*"
    }
    console.log(result)
    result = ""
}