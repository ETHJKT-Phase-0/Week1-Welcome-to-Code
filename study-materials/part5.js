// for (let i = 1; i < 4; i++) {
//     console.log (i);
// }

// let sandi = "";
// while (sandi !== "1234") {
//     sandi = console.log("Masukkan Sandi:");
// }

// let sandi = "";
// while (sandi !== "1234") {
//   sandi = prompt("Masukkan sandi:");
//   if (sandi === null) {
//     alert("Operasi dibatalkan.");
//     break;
//   }
// }

// if (sandi === "1234") {
//   alert("Sandi benar!");
// }

// const mobil = {Merek: "Toyota", Tahun: 2000 };
// for (const key in mobil) {
//     console.log (key, "adalah", mobil[key]); 
// }

// for (let i=1; 1 <=5; i++) {
//     if (i === 3) break;
//     console.log (i);
// }

// let i =0;
// while (i < 5) {
//     console.log (i)
// }

// for (i = 0; i < 100; i++) {
//     if (i % 28 === 0) {
//         console.log ("FOURSEVEN");
//     }
//     else if (i % 4 === 0) {
//         console.log ("FOUR");
//     }
//     else if (i % 7 === 0) {
//         console.log ("SEVEN");
//     } else {
//         console.log(i);
//     }
// }

// for (let i=0; i < 3; i++) {
//     console.log (`Outer: ${i}`);

//     for (let j = 0; j < 2; j++) {
//         console.log (` Inner: ${j}`);
//     }
// }

// const matriks = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// for (let row = 0; row < 3; row++) {
//     for (let col = 0; col < 3; col++) {
//         console.log (matriks[row] [col]);
//     }
// }

let pattern = "";
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    pattern += "\n";
}
console.log (pattern);