// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 
// dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.
let pertambahan2= 1;
let pertambahan5=1;
let pertambahan9=1
do{
    if(pertambahan2%3===0){
    console.log(pertambahan2+' kelipatan 3');
    }
    pertambahan2+=2;
}while(pertambahan2<=100);

while(pertambahan5<=100){
    if(pertambahan5%6===0){
        console.log(pertambahan5+' kelipatan 6');
    }
    pertambahan5+=5;
}

for(let i =pertambahan9; pertambahan9<=100; pertambahan9+=9){
    if(pertambahan9%10===0){
        console.log(pertambahan9+ 'kelipatan 10');
    }
}


