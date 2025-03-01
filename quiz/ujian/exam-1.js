
function bandingkanAngka(angka1, angka2) {
    let status;
    if (angka1 < angka2) {
        status = `${angka1} < ${angka2} = TRUE`
    } else if (angka1 > angka2) {
        status = `${angka1} > ${angka2} = FALSE`
    } else {
        status = `${angka1} == ${angka2} = -1`
    }
    return status;
}

console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false