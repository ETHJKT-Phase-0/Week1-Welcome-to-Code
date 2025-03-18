// Buatlah segitiga
//     *
//    **
//   ***
//  ****
// *****

// code
// initialize empty string
let input = 5;

// initialize looping for fill the string with *
for (let i = 0; i <= input; i++) {
    let x = "";
    // create inner loop for
    for (let j = 0; j < input - i; j++) {
        x += " "
    }

    for (let k = 0; k <= i; k++) {
        x += "*";
    }
    console.log(x);
}

