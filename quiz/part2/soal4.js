// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);
let exampleSecondWord4 = word4.substring(4, 14);
let exempleThirthWord4 = word4.substring(15, 17);
let exampleFourthword4 = word4.substring(18, 20)
let exampleFifthWord4 =word4.substring(21, 25);

let word01 = exampleFirstWord4.length;
let word02 = exampleSecondWord4.length;
let word03 = exempleThirthWord4.length;
let word04 = exampleFourthword4.length;
let word05 = exampleFifthWord4.length;

console.log(
    'First Word: ' + exampleFirstWord4 + ',with length: ' + word01
);
console.log(
    'Second Word: ' + exampleSecondWord4 + ',with lenght: ' + word02
);
console.log(
    'Third Word: ' +exempleThirthWord4+ ',with lenght: ' + word03
);
console.log(
    'Fourth Word: ' + exampleFourthword4 + ',with lenght: ' + word04
);
console.log(
    'Fifth Word: ' + exampleFifthWord4 + ',with lenght: ' + word05
);