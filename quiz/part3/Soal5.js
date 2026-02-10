var j ='';
for( var i =1; i <= 5;i++){ //digunakan untuk menambah baris bintang
  for( var s =0; s<i; s++){
    j += '*';//j atau bintang akan terus bertambah sampai 10 karena j ada di pengulangan for
  }
  j += '\n';//ini yang membuat bintang menambah baris
 
}
console.log(j)