let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);

let firstWordLength = exampleFirstWord4.length;
let secwordlength = word4.substring(4,14).length;
let thirdwordlength = word4.substring(15,17).length;
let fourthwordlength =word4.substring(18,20).length;
let fifthwordlength = word4.substring(21,25).length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('Secound Word: '+word4.substring(4,14)+ ', with length: '+secwordlength);
console.log('Third Word: '+ word4.substring(15,17)+ ', with length: '+thirdwordlength);
console.log('Fourth Word: '+ word4.substring(18,20)+ ', with length: '+fourthwordlength);
console.log('Fifth Word : '+ word4.substring(21,25)+ ', with length: '+fifthwordlength);
