// ## Soal 4. Breaking Sentence (yet Again) and Count Each Length

// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

let word4 = 'wow JavaScript is so cool';
let classes = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];

console.log(word4.split(' ').map((item, id) => {
    console.log(`${classes[id]} Word : ${item}, with length: ${item.split('').length}`)
}));



// let FirstWord4 = word4.substring(0, 3);
// let SecondWord4 = word4.substring(4, 14);
// let ThirdWord4 = word4.substring(15, 17);   
// let FourthWord4 = word4.substring(18, 20);  
// let FifthWord4 = word4.substring(21, 25); 

// let firstWordLength = FirstWord4.length; 
// let secondWordLength = SecondWord4.length;
// let thirdWordLength = ThirdWord4.length;
// let fourthWordLength = FourthWord4.length;
// let fifthWordLength = FifthWord4.length;

// console.log('First Word: ' + FirstWord4 + ', with length: ' + firstWordLength);
// console.log('Second Word: ' + SecondWord4 + ', with length: ' + secondWordLength);
// console.log('Third Word: ' + ThirdWord4 + ', with length: ' + thirdWordLength);
// console.log('Fourth Word: ' + FourthWord4 + ', with length: ' + fourthWordLength);
// console.log('Fifth Word: ' + FifthWord4 + ', with length: ' + fifthWordLength);