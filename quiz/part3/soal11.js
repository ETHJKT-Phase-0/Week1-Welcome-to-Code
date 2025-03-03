// variable
let input = 5;

// for loop bintang asteriks
for (i = 1; i <= input; i++) {
    let row = "";
    for (j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}