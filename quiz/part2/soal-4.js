// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstword4 = word4.substring(0, 3);
let exampleSecondtword4 = word4.substring(4, 14);
let exampleThirdtword4 = word4.substring(15, 17);
let exampleFourthtword4 = word4.substring(18, 20);
let exampleFifthtword4 = word4.substring(21, 25);

let firstWordLength = exampleFirstword4.length;
let SecondWordLength = exampleSecondtword4.length;
let ThirdWordLength = exampleThirdtword4.length;
let FourthWordLength = exampleFourthtword4.length;
let FifthWordLength = exampleFifthtword4.length;


console.log('First Word: ' + exampleFirstword4 + ', with length: ' + firstWordLength)
console.log('Second Word: ' + exampleSecondtword4 + ', with length: ' + SecondWordLength)
console.log('Third Word: ' + exampleThirdtword4 + ', with lenght: ' + ThirdWordLength)
console.log('Fourth Word: ' + exampleFourthtword4 + ', with lenght: ' + FourthWordLength)
console.log('Fifth Word: ' + exampleFifthtword4 + ', with lenght: ' + FifthWordLength)