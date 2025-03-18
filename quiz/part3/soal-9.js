// buatlah segitiga diamond seperti ini
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

let rowOne = 5;
for (let a = 0; a < rowOne - 1; a++) {
    let diamond = "";
    for (let b = 0; b < rowOne - a; b++) {
        diamond += " ";
    }
    for (let c = 0; c < 2 * a - 1; c++) {
        diamond += "*";
    }
    console.log(diamond);
}

let rowTwo = 5;
for (let d = rowTwo - 1; d >= 0; d--) {
    let diamond = "";
    for (let e = 0; e < rowTwo - d; e++) {
        diamond += " ";
    }
    for (let f = 0; f < 2 * d - 1; f++) {
        diamond += "*";
    }
    console.log(diamond);
}