function konversiMenit(menit) {
    // you can only write your code here!
    let jam = Math.floor(menit / 60);
    let sisa = menit % 60;
    if (Math.floor(sisa / 10) === 0){
        sisa = "0"+sisa;
    } 

    return jam+":"+sisa;
}
  
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00