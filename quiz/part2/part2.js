// Soal 1
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
    seventh,
);

// Soal 2
let words = "wow JavaScript is so cool";
let exampleFirstWord = words[0] + words[1] + words[2];

console.log("First Word: " + exampleFirstWord);
console.log(
  "Second Word: " +
    words[4] +
    words[5] +
    words[6] +
    words[7] +
    words[8] +
    words[9] +
    words[10] +
    words[11] +
    words[12] +
    words[13],
);
console.log("Third Word: " + words[15] + words[16]);
console.log("Fourth Word: " + words[18] + words[19]);
console.log("Fifth Word: " + words[21] + words[22] + words[23] + words[24]);

// Soal 3
let word3 = "wow JavaScript is so cool";

let exampleFirstWord3 = word3.substring(0, 3);
console.log("First Word: " + exampleFirstWord3);

let secondWord3 = word3.substring(4, 14);
console.log("Second Word: " + secondWord3);

let thirdWord3 = word3.substring(15, 17);
console.log("Third Word: " + thirdWord3);

let fourthWord3 = word3.substring(18, 20);
console.log("Fourth Word: " + fourthWord3);

let fifthWord3 = word3.substring(21, 25);
console.log("Fifth Word: " + fifthWord3);

// Soal 4
let firstWordLength = exampleFirstWord3.length;
console.log(
  "First Word: " + exampleFirstWord + ", with length: " + firstWordLength,
);

let secondWordLength = secondWord3.length;
console.log(
  "Second Word: " + secondWord3 + ", with length: " + secondWordLength,
);

let thirdWordLength = thirdWord3.length;
console.log("Third Word: " + thirdWord3 + ", with length: " + thirdWordLength);

let fourthWordLength = fourthWord3.length;
console.log(
  "Fourth Word: " + fourthWord3 + ", with length: " + fourthWordLength,
);

let fifthWordLength = fifthWord3.length;
console.log("Fifth Word: " + fifthWord3 + ", with length: " + fifthWordLength);
