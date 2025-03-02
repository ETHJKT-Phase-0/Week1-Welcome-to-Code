// function isPrime(n){
//     if ( n < 2) return false;
//     for ( let i = 2; i <= Math.sqrt(n); i++){
//         if( n  % i === 0 ) 
//             return false;

//     }
//         return true;
// }

// console.log(isPrime(3));

// let j = "5";
// for ( i = 2, i <= j; i++;) {
//     let isPrime = true;
//     for (j; j <= Math.sqrt(i); j++){
//         if(i % j === 0)
//         isPrime = false;
//         break;
//     }

// if (isPrime){
//     console.log(i);
// }
// }

// let pattern = "";
// for (let i = 6; i >= 0; i--) {           // Loop baris
//   for (let j = 1; j <= i; j++) {         // Loop kolom (bintang per baris)
//     pattern += "*";
//   }
//   pattern += "\n";
// }
// console.log(pattern);

var j = 30;
let i = 2;
for ( i; i <= j; i++){
    
    for (j; i <= Math.sqrt(j); i++){
        if(j % i === 0){

            console.log("bukan prima");
            break;
        }else{
            console.log("prima");
            break;
        }
    }
}

