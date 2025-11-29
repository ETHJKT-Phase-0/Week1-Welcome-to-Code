// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

console.log("---Pertambahan Counter 2---");
for (let i = 1; i <= 100; i++) {
i=i+1;
if(i%3==0){
    console.log(i+" kelipatan 3");  
}else{
    console.log(i);
}
}
console.log("---Pertambahan Counter 5---");
for (let i = 1; i <= 100; i++) {
    i=i+4;
    if(i%6==0){
        console.log(i+" kelipatan 6");}else{ 
    console.log(i);}
    }
console.log("---Pertambahan Counter 9---");
for (let i = 1; i <= 100; i++) {
    i=i+8;
    if(i%10==0){
        console.log(i+" kelipatan 10");}else{
      console.log(i);
    }}