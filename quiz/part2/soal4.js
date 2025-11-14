//  Soal 4. Breaking Sentence (yet Again) and Count Each Length

// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);
let firstWord4Length = exampleFirstWord4.length;
let secondWord4 = word4.substring(4, 14);
let secondWord4Length = secondWord4.length;
let thirdWord4 = word4.substring(15, 17);
let thirdWord4Length = thirdWord4.length;
let fourthWord4 = word4.substring(18, 20);
let fourthWord4Length = fourthWord4.length;
let lastWord4 = word4.substring(21, 25);
let lastWord4Length = lastWord4.length;

console.log('First Word : ' + exampleFirstWord4 + ', with length: ' + firstWord4Length);
console.log('Second Word : ' + secondWord4 + ', with length: ' + secondWord4Length);
console.log('Third Word : ' + thirdWord4 + ', with length: ' + thirdWord4Length);
console.log('Fourt Word : ' + fourthWord4 + ', with length: ' + fourthWord4Length);
console.log('Last Word : ' + lastWord4 + ', with length: ' + lastWord4Length);
console.log('Full Word : '+ word4 + ', with length: ' + word4.length);

// SOAL 4 DONE