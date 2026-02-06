// ## Soal 5. Bintang asteriks

// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//*****


for (i = 0; i <= input ; i++){
    // console.log(`${i} heloow `);

    let bintang = "";

    for (j = 0; j < i; j++){
        bintang += "*";
    }

    console.log(bintang);

}

for (i = 0; i <= input ; i++) {
    console.log("*".repeat(i));
}


for (i = input; i >= 0 ; i--){
    console.log("*".repeat(i))
}

for (i = 0; i < input; i++ ){
    console.log("*".repeat(input))
}

console.log(" ")

for (i = input; i > 0; i--){

    let segitiga = ""

    for (j = 0; i > j; j++){
        segitiga += "*"
        // console.log(j)
    }

    console.log(segitiga)
}

console.log(" ")

for (i = input; i > 0; i--){

    let segitiga = ""
    // console.log(i)
    

    for (j = 0; j < i; j++){
        segitiga += " "
        // console.log(j)
    }

    for (z = input; z >= i ; z--){
        segitiga += "*"
    }

    console.log(segitiga)
}

for (i = input; i > 0; i--){

    let segitiga = ""
    // console.log(i)
    

    for (j = 0; j < i; j++){
        segitiga += "*"
        // console.log(j)
    }

    // for (z = input; z >= i ; z--){
    //     segitiga += " "
    // }

    console.log(segitiga)
}

console.log(" ")

for (i = input; i > 0; i--){

    let segitiga = ""
    // console.log(i)
    

    for (j = 0; j < i; j++){
        segitiga += " "
        // console.log(j)
    }

    for (z = input; z >= i ; z--){
        segitiga += "*"
    }

    console.log(segitiga)
}

for (i = input; i > 0; i--){

    let segitiga = ""
    // console.log(i)
    

    for (j = input; j >= i; j--){
        segitiga += " "
        // console.log(j)
    }

    for (z = 0; z < i ; z++){
        segitiga += "*"
    }

    console.log(segitiga)
}

console.log(" ")

for (i = input; i > 0; i--){

    let segitiga = ""
    // console.log(i)
    

    for (j = 0; j < i; j++){
        segitiga += " "
        // console.log(j)
    }

    for (z = input; z >= i ; z--){
        segitiga += "**"
    }

    console.log(segitiga)
}

for (i = input; i > 0; i--){

    let segitiga = ""
    // console.log(i)
    

    for (j = input; j >= i; j--){
        segitiga += " "
        // console.log(j)
    }

    for (z = 0; z < i ; z++){
        segitiga += "**"
    }

    console.log(segitiga)
}
console.log(" ")