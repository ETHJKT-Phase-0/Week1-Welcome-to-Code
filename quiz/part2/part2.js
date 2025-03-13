//soal 1
let word = "JavaScript";
let second = "is";
let third = "awesome";
let fourth = "and";
let fifth = "I";
let sixth = "love";
let seventh = "it!";

console.log(
  word +
    " " +
    second +
    " " +
    third +
    " " +
    fourth +
    " " +
    fifth +
    " " +
    sixth +
    " " +
    seventh
);

//soal 2
let word2 = "wow JavaScript is so cool";
let exampleFirstWord = word2[0] + word2[1] + word2[2];
let exampleSecondWord =
  word2[4] +
  word2[5] +
  word2[6] +
  word2[7] +
  word2[8] +
  word2[9] +
  word2[10] +
  word2[11] +
  word2[12] +
  word2[13];
let exampleThirdWord = word2[15] + word2[16];
let exampleFourthWord = word2[18] + word2[19];
let exampleFifthWord = word2[21] + word2[22] + word2[23] + word2[24];

console.log("First Word: " + exampleFirstWord);
console.log("Second Word: " + exampleSecondWord);
console.log("Third Word: " + exampleThirdWord);
console.log("Fourth Word: " + exampleFourthWord);
console.log("Fifth Word: " + exampleFifthWord);

//soal 3
let word3 = "wow JavaScript is so cool";
let exampleFirstWord3 = word3.substring(0, 3);
let exampleSecondWord3 = word3.substring(4, 14);
let exampleThirdWord3 = word3.substring(15, 17);
let exampleFourthWord3 = word3.substring(18, 20);
let exampleFifthWord3 = word3.substring(21, 26);

console.log("First Word: " + exampleFirstWord3);
console.log("Second Word: " + exampleSecondWord3);
console.log("Third Word: " + exampleThirdWord3);
console.log("Fourth Word: " + exampleFourthWord3);
console.log("Fifth Word: " + exampleFifthWord3);

//soal4
let word4 = "wow JavaScript is so cool";
let exampleFirstWord4 = word4.substring(0, 3);
let exampleSecondWord4 = word4.substring(4, 14);
let exampleThirdWord4 = word4.substring(15, 17);
let exampleFourthWord4 = word4.substring(18, 20);
let exampleFifthWord4 = word4.substring(21, 26);

console.log(
  "First Word: " + exampleFirstWord4 + `, length = ${exampleFirstWord4.length}`
);
console.log(
  "Second Word: " +
    exampleSecondWord4 +
    `, length = ${exampleSecondWord4.length}`
);
console.log(
  "Third Word: " + exampleThirdWord4 + `, length = ${exampleThirdWord4.length}`
);
console.log(
  "Fourth Word: " +
    exampleFourthWord4 +
    `, length = ${exampleFourthWord4.length}`
);
console.log(
  "Fifth Word: " + exampleFifthWord4 + `, length = ${exampleFifthWord4.length}`
);
