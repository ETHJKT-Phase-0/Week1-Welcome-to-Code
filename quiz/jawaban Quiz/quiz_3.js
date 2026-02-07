// // // Soal 1
// // let i = 0;
// // let j = 5;

// // console.log("Looping Pertama \n")
// // while(i < 5 ){
// //   console.log("Looping Pertama: " + i);
// //   i++;
// // }

// // console.log("Looping Kedua \n")
// // while (j >= 0){
// //   console.log("Looping Kedua: " + j);
// //   j--;
// // }

// // Soal 2
// console.log("Soal 1 Looping ")

// for(let i = 0; i < 10; i++ ){
//   console.log ("Looping Pertama: " + i)
// }

// console.log("Soal 1 Looping ")

// for(let j = 10; j > 0; j-- ){
//   console.log ("Looping Pertama: " + j)
// }


// Soal 3
// for(let i = 1; i < 101; i++){
//   if (i % 2 == 0){
//     console.log(i + " GENAP")
//   }else if (i % 2 !=0){
//     console.log(i + " GANJIL")
//   }
// }

// SOal 4

// kelipatan 3 pertambahan 2
// for (i = 1; i < 101; i +=2){
//   if ( i % 3 ===0){
//     console.log(i +" kelipatan 3")
//   }
// }

// // kelipatan 6 pertambahan 5
// for (j = 1; j <101; j+=5){
//   if ( j % 6 == 0){
//     console.log( j +" Kelipatan 6")
//   }
// }

// // kelipatan 10 pertambahan 9

// for (k =1; k<101; k += 9){
//   if (k % 10 == 0){
//     console.log( k + " Kelipatan 10")
//   }
// }

let input = ""

for (i =1; i <= 5; i++){
    for(j =1; j <= i; j ++){
        input +="*"
    }
    input += "\n"
}

console.log(input)
