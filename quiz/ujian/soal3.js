function konversiMenit(menit){
    let jam = Math.floor(menit / 60);
    let sisaMenit = menit % 60;

    if (sisaMenit < 10) {
        sisaMenit = "0" + sisaMenit;
    }

    return jam + ":" + sisaMenit;
}

console.log(konversiMenit(63));
console.log(konversiMenit(124)); 
console.log(konversiMenit(45));  
console.log(konversiMenit(3));   
console.log(konversiMenit(150));