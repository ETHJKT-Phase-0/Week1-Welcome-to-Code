function konversiMenit(menit) {
let jam = Math.floor(menit / 60);
let menitSisa = menit % 60; 
if (menitSisa < 10) {
    menitSisa = '0' + menitSisa;
}
return jam + ':' + menitSisa;

}

console.log(konversiMenit(63));
console.log(konversiMenit(124));
console.log(konversiMenit(53));
console.log(konversiMenit(88));
console.log(konversiMenit(120));