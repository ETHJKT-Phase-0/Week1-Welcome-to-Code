// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3 = 'wow JavaScript is so cool';
let exampleFirstWord3 = word3.substring(0, 25);
// console.log(word3.length);
// console.log('First Word: ' + exampleFirstWord3);

let left = 0, right = 0, x = 0;
let words = "";
const kumpulan_kata = [];

let p = 0;
left = p;
for(let q = p + 1; q < word3.length; q++){
    if(word3[q] == " "){
        right = q;
        words = word3.substring(left, right);
        kumpulan_kata[x] = words;
        x++;
        left = right + 1;
    }

    if(q == word3.length - 1){
        right = word3.length;
        words = word3.substring(left, right);
        kumpulan_kata[x] = words;
    }
}

for(let y = 0; y < kumpulan_kata.length; y++){
    let temp = "";
    switch(y){
        case 0:
            temp = "First";
            break;
        case 1: 
            temp = "Second";
            break;
        case 2: 
            temp = "Third";
            break;
        case 3:
            temp = "Fourth";
            break;
        case 4: 
            temp = "Fiveth";
            break;
        default: 
            break;
    }
    console.log(`${temp} word: ${kumpulan_kata[y]}`)
}