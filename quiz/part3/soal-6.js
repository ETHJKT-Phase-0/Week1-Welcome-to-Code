// Buatlah segitiga seperti ini
// *********
//  *******
//   *****
//    ***
//     *

// code
// initialize input or row to 5
// so the triangle will have height 5 row
let input = 5;
// start looping
// because we want to reverse the triangle
// we need to backward the looping, from 5 to 1 using decrement
for (let a = input; a >= 1; a--) {
    let triangle = "";
    // start looping for create space
    // for the first iteration, it will print nothing since b = 1
    // and the condition are not met (input - a = 0)
    // in the iteration, it will print incrementally from 1 to 4 space
    for (let b = 1; b <= input - a; b++) {
        triangle += " ";
    }

    // then, start looping for * pattern
    // for the first iteration, it will be print 9 to 1 * pattern
    for (let c = 0; c < 2 * a - 1; c++) {
        triangle += "*";
    }

    // print final result
    console.log(triangle);
}