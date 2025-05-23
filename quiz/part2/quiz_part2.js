//soal 1
console.log('== SOAL NOMOR 1 ==');
let word = 'JavaScript';
let second = 'is';
let third = 'awesome';
let fourth = 'and';
let fifth = 'I';
let sixth = 'love';
let seventh = 'it!'; 


let formated = word + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh;
console.log(formated);
console.log('=====================\n');


// soal 2
console.log('== SOAL NOMOR 2 ==');
let a_word = 'wow JavaScript is so cool';
let exampleFirstWord = a_word[0] + a_word[1] + a_word[2];
let exampleSecondWord = a_word[4] + a_word[5] + a_word[6] + a_word[7] + a_word[9] + a_word[10] + a_word[11] + a_word[12] + a_word[13];
let exampleThirdWord = a_word[14] + a_word[15] + a_word[16] + a_word[17];
let exampleFourthWord = a_word[18] + a_word[19] + a_word[20] ;
let exampleFifthWord = a_word[21] + a_word[22] + a_word[23] + a_word[24];

console.log('First Word: ' + exampleFirstWord + '\nSecond Word: ' + exampleSecondWord + '\nThird Word: ' + exampleThirdWord + '\nFourth Word: ' + exampleFourthWord + '\nFifth Word: ' + exampleFifthWord);
console.log('=====================\n');



// soal 3
console.log('== SOAL NOMOR 3 ==');
let word3 = 'wow JavaScript is so cool';

let exampleFirstWord3 = word3.substring(0, 3);
let exampleTwoWord3 = word3.substring(4, 14);
let exampleThirdWord3 = word3.substring(15, 17);
let exampleFourthWord3 = word3.substring(18, 20);
let exampleFifthWord3 = word3.substring(21, 25);

console.log('First Word: ' + exampleFirstWord3 + '\nSecond Word: ' + exampleTwoWord3 + '\nThird Word: ' + exampleThirdWord3 + '\nFourth Word: ' + exampleFourthWord3 + '\nFifth Word: ' + exampleFifthWord3);
console.log('=====================\n');


console.log('== SOAL NOMOR 3 ==');

let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);
let exampleFirstWord4Length = exampleFirstWord4.length;

let exampleTwoWord4 = word4.substring(4, 14);
let exampleTwoWord4Length = exampleTwoWord4.length;

let exampleThirdWord4 = word4.substring(15, 17);
let exampleThirdWord4Length = exampleThirdWord4.length;

let exampleFourthWord4 = word4.substring(18, 20);
let exampleFourthWord4Length = exampleFourthWord4.length;

let exampleFifthWord4 = word4.substring(21, 25);
let exampleFifthWord4Length = exampleFifthWord4.length;

console.log('First Word: ' + exampleFirstWord4 + ' width length: ' + exampleFirstWord4Length + '\nSecond Word: ' + exampleTwoWord4 + ' width length: ' + exampleTwoWord4Length + '\nThird Word: ' + exampleThirdWord4 + ' width length: ' + exampleThirdWord4Length + '\nFourth Word: ' + exampleFourthWord4 + ' width length: ' + exampleFourthWord4Length + '\nFifth Word: ' + exampleFifthWord4 + ' width length: ' + exampleFifthWord4Length);
console.log('=====================\n');